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
      <br />
      <a href="https://catherinemei.github.io/benthic-proto-three/">
        Go to Prototype 3 - Parent Focus with Chemistry
      </a>
      <br />
      <a href="https://catherinemei.github.io/benthic-proto-four/">
        Go to Prototype 4 - Flat with Chemistry
      </a>
      <br />
      <a href="https://catherinemei.github.io/benthic-proto-five/">
        Go to Prototype 5 - New Parent Focus with explicit parent node selection
        menu (via pressing G)
      </a>

      <br />
      <a href="https://catherinemei.github.io/benthic-proto-six/">
        Go to Prototype 6 - New Parent Focus with integrated parent node
        selection (no pressing G or P to jump out to selection menu)
      </a>

      <br />
      <a href="https://catherinemei.github.io/benthic-proto-seven/">
        Go to Prototype 7 - New Parent Focus where each node only accesses 2
        outgoing nodes (contains and belongs to)
      </a>

      <h1>Commands</h1>
      <ul>
        <li>Press Left/Right/Up/Down arrows to traverse nodes in same layer</li>
        <li>Press Shift + Up Arrow to navigate to parent/ parent layer</li>
        <li>Press Shift + Down Arrow to navigate to first child</li>
        <li>Press Enter to select node</li>
        <li>Press H to refocus on current node (in adjacency layer) </li>
        <li>
          [Parent Focus only] Press P to switch parent in focus / parent context
        </li>
      </ul>
    </div>
  );
};

export default App;
