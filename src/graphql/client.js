import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_WP_API_URL
});
