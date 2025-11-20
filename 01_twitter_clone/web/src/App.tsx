import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';

import './App.css';
import Users from "./components/Users"
import Landing from "./components/Landing"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { setContext } from "apollo-link-context"
const httpLink = new HttpLink({ uri: "http://localhost:4000" })

const authLink = setContext(async (req, { headers }) => {
	const token = localStorage.getItem("token")

	return {
		...headers,
		headers: {
			Authorization: token ? `Bearer ${token}` : null
		}
	}
})

const link = authLink.concat(httpLink as any)
const client = new ApolloClient({
	link: link as any,
	cache: new InMemoryCache()
})
// const client = new ApolloClient({
//   uri: "http://localhost:4000",
//   cache: new InMemoryCache()
// });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes >
        <Route path="/landing" element={<Landing />}>
					</Route>          
          <Route path="/signup" element={<Signup />}>
					</Route>          
          <Route path="/login" element={<Login />}>
					</Route>          
          <Route path='/' element={<Users />}>
          </Route>
        </Routes>
      </Router>
    <div><Users /></div>
    </ApolloProvider>
  );
}

export default App;
