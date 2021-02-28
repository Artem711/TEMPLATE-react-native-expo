// # PLUGINS IMPORTS //
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// # COMPONENTS IMPORTS //
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

// # EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export default function AppProvider(props: {
  children: React.ReactElement
}): React.ReactElement {
  return (
    <ApolloWrapper>
      <SafeAreaProvider>{props.children}</SafeAreaProvider>
    </ApolloWrapper>
  )
}

export function ApolloWrapper(props: {
  children: React.ReactElement
}): React.ReactElement {
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
