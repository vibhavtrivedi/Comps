import React from "react";
import Button from "./Button";
function App() {
  return (
    <div>
      <div>
        <Button success primary rounded outline>Click me 1!</Button>
      </div>
      <div>
        <Button danger outline>Click me 2!</Button>
      </div>
      <div>
        <Button warning>Click me 3!</Button>
      </div>
      <div>
        <Button>Click me 4!</Button>
      </div>
      <div>
        <Button>Click me 5!</Button>
      </div>
    </div>
  );
}

export default App;
