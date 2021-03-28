# Consumer of the NPM library @abbeblubb/react-library

This project is a create-react-app that consumes the npm library @abbeblubb/react-library.

## Install

``` Nodejs
> npm i @abbeblubb/react-library
```

## Import

``` Reactjs
import { Button, Hello } from "@abbeblubb/react-library";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Hello name="Elvis!" />
      <Button />
    </div>
  );
}

export default App;
```
