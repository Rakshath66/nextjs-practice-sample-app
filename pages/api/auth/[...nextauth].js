import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'f397d67e6b8268746363',
            clientSecret: '67c70a7c3edbb3ef74bf6c86d939b158eea4d160',
        })
    ]
}
//providers in nextauth
export default NextAuth(authOptions);