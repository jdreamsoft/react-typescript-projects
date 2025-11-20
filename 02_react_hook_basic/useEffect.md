# useEffect
The useEffect Hook allows you to perform side effects in your components.<br />
Some examples of side effects are: fetching data, directly updating the DOM, and timers.<br />
useEffect accepts two arguments. The second argument is optional.<br />
useEffect(<function>, <dependency>)

## 1. No dependency passed:
```shell
useEffect(() => {
  //Runs on every render
});
```
## 2. An empty array:
```shell
useEffect(() => {
  //Runs only on the first render
}, []);
```
## 3. Props or state values:
```shell
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

### Example: Only run the effect on the initial render:
```shell
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
```
### Example:

Here is an example of a useEffect Hook that is dependent on a variable. <br />
If the count variable updates, the effect will run again:
```shell
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
```

## 4. Effect Cleanup
Some effects require cleanup to reduce memory leaks.<br />
Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.<br />
We do this by including a return function at the end of the useEffect Hook.<br />

### Example: Clean up the timer at the end of the useEffect Hook:
```shell
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
```