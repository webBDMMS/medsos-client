/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextAuthConfig } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import axios from "axios";

const authConfig = {
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        nik: { label: "Nik", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          console.log("Authorizing user with credentials:", credentials);

          const res = await axios.post(
            `http://localhost:5050/user/login`,
            {
              nik: credentials?.nik,
              password: credentials?.password,
            },
            {
              headers: { "Content-Type": "application/json" },
              withCredentials: true,
            }
          );

          console.log("Response from backend:", res.data.data);
          // Updating the Zustand store with the correct values

          if (res.status === 200 && res.data) {
            const userData = {
              id: res.data.data.id,
              name: res.data.data.nama,
              email: null,
              emailVerified: null,
              role: res.data.data.role,
              id_pj_cabang: res.data.data.id_pj_cabang,
              exp: Math.floor(Date.now() / 1000) + 30 * 60, // 30 minutes
            };

            console.log("User authenticated successfully:", userData);

            return userData;
          }
          return null;
        } catch (error: any) {
          console.error("Authorization error:", error.response?.data);
          throw new Error(error.response?.data?.msg || "Authentication error");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 60, // 30 minutes in seconds
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("Token in jwt callback:", token);

      if (user) {
        console.log("User object in JWT callback:", user);
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.id_pj_cabang = user.id_pj_cabang;
        token.exp = user.exp;
      }

      if (token.exp && Date.now() / 1000 > token.exp) {
        console.log("Token has expired.");
        return null;
      }
      console.log("Token is valid.");

      return token;
    },
    async session({ session, token }) {
      console.log("Session callback - token:", token);

      session.user = {
        id: token.id as string,
        name: token.name!,
        email: token.email!,
        emailVerified: null,
        role: token.role as string,
        id_pj_cabang: token.id_pj_cabang as string,
      };

      console.log("Session callback - session:", session);
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
} satisfies NextAuthConfig;

export default authConfig;
