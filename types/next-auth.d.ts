import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string | null;
      email: string | null;
      role: string;
      id_pj_cabang: string;
      emailVerified: Date | null;
    };
    expires: string;
  }

  interface User {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    role: string;
    id_pj_cabang: string;
    exp?: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string | null;
    email: string | null;
    role: string;
    id_pj_cabang: string;
    exp?: number;
  }
}
