import React from 'react'
import {gql, useQuery} from "@apollo/client"

const USERS_QUERY = gql`
  query users_query  {
    users {
      name
    }
  }
`
interface User {
    name: string
}
export default function Users() {
    const { loading, error, data } = useQuery(USERS_QUERY)
    if (loading) return <p>Loading...</p>
    if (error) return <p>111{error.message}</p>

    return (
        <div>
            {data.users.map((user: User) => (
                <p>{user.name}</p>
            ))}            
        </div>
    )
}