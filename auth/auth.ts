import NextAuth from "next-auth";
import { authOptions } from "./auth.config";

const { handlers, auth, signIn, signOut } = NextAuth(authOptions);

export const { GET, POST } = handlers;
export { auth, signIn, signOut };
