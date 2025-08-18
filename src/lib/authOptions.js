import { loginUser } from "@/app/actions/auth/loginUser";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect, { collectionNames } from "@/lib/dbConnect";

const adminEmails = process.env.ADMIN_EMAIL?.split(",") || [];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = await loginUser(credentials);
        if (user) return user;
        return null;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],

  pages: {
    signIn: "/login"
  },

  callbacks: {
    // SignIn callback → check admin emails & save role
    async signIn({ user, account }) {
      const usersCollection = dbConnect(collectionNames.usersCollection);
      const query = { email: user?.email };
      let dbUser = await usersCollection.findOne(query);

      // Determine role
      const role = adminEmails.includes(user.email) ? "Admin" : "User";

      if (!dbUser) {
        // First-time user → insert
        const userData = {
          provider: account?.provider || "credentials",
          email: user.email,
          name: user.name || "",
          image: user.image || "",
          role
        };
        await usersCollection.insertOne(userData);
        dbUser = userData;
      } else if (dbUser.role !== role) {
        // Update role if changed (e.g. admin added later)
        await usersCollection.updateOne({ email: user.email }, { $set: { role } });
        dbUser.role = role;
      }

      // Save role in user object (JWT)
      user.role = dbUser.role;

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "User";
      }
      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role || "User";
      return session;
    }
  }
};
