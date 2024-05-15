import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
        firstName: string;
        lastName: string;
        id: number;
        tokens: {
            token: string,
            refreshToken: string
        };
        userName: string
    };
  }
}