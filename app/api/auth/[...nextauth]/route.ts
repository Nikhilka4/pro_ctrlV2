import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role?: string;
      username?: string;
    } & DefaultSession["user"];
  }
}

interface CustomToken extends JWT {
  role?: string;
  username?: string;
}

interface CustomUser {
  id: string;
  username: string;
  role: string;
}

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        await connectDB();
        const user = await User.findOne({
          username: credentials.username.toLowerCase(),
        });

        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) return null;

        console.log("User logged in successfully:", {
          id: user._id,
          username: user.username,
          role: user.role,
          loginTime: new Date().toISOString(),
        });

        return {
          id: user._id,
          username: user.username,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    async jwt({ token, user }: { token: CustomToken; user: CustomUser | any }) {
      if (user) {
        console.log("JWT Callback - User details:", user);
        token.role = user.role;
        token.username = user.username;
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: CustomToken;
    }) {
      if (session.user) {
        console.log("Session Callback - Session details:", session);
        session.user.role = token.role;
        session.user.username = token.username;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
