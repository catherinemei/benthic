import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div>
      <h1>Home page</h1>
      <p>Select a prototype to view:</p>
      <a href="https://catherinemei.github.io/benthic-proto-one/">
        Go to Prototype 1 - Parent Focus
      </a>
      <br />
      <a href="https://catherinemei.github.io/benthic-proto-two/">
        Go to Prototype 2 - Flat
      </a>
    </div>
  );
};

export default App;
