# useContext
## React Context 
React Context is a way to manage state globally.<br />
It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

## The Problem
State should be held by the highest parent component in the stack that requires access to the state.<br />
To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.<br />
To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".<br />

## Create Context
To create context, you must Import createContext and initialize it:
```shell
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
const UserContext = createContext()
```

## Context Provider
Next we'll use the Context Provider to wrap the tree of components that need the state Context.<br />
Wrap child components in the Context Provider and supply the state value.

```shell
function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}
```
## Use the useContext Hook
In order to use the Context in a child component, we need to access it using the useContext Hook.<br />
First, include the useContext in the import statement:

```shell
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);
```
