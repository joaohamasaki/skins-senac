import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';

export const client = new ApolloClient({
    link: new WebSocketLink({
        uri: 'ws://united-polliwog-73.hasura.app/v1/graphql',
        options:{
            reconnect: true,
            connectionParams: {
                headers : { 'x-hasura-admin-secret' : 'REY9r625ke9qOM8SLwu9NgGU2isuvggQkoWcfmuB5ERmvB7yn5WNOl9C5Jjx8mQr' },
            }
        }
    }),
    cache: new InMemoryCache()
});