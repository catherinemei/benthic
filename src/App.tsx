import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div>
      <h1>Home page</h1>
      <p>Select a prototype to view:</p>
      <a href="https://catherinemei.github.io/benthic-proto-one/">
        Go to Prototype 1 - Parent Focus with Data Vis
      </a>
      <br />
      <a href="https://catherinemei.github.io/benthic-proto-two/">
        Go to Prototype 2 - Flat with Data Vis
      </a>
      <a href="https://catherinemei.github.io/benthic-proto-three/">
        Go to Prototype 1 - Parent Focus with Chemistry
      </a>
      <br />
      <a href="https://catherinemei.github.io/benthic-proto-four/">
        Go to Prototype 2 - Flat with Chemistry
      </a>

      <h1>Commands</h1>
      <ul>
        <li>
          Press Left/Right/Up/Down arrows for traverse nodes in same layer
        </li>
        <li>Press Shift + Up Arrow to go to parent layer</li>
        <li>Press Shift + Down Arrow to go to first child</li>
        <li>Press Enter to select node</li>
      </ul>
    </div>
  );
};

export default App;
