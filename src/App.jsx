import { Component } from "react";

import Parent from "./assets/Components/parent";
import Counter from "./counter/counter";

class App extends Component {
  render() {
    const arr = [1, 2, 3, 4, 56];
    const names = ["Ahalya", "Hema","Rahul"];
    const people = [
      { id: 1, name: "ahalya" },
      { id: 2, name: "chinnu" }
    ];

    return (
      <>
        <div>
          <Counter/>
          <h1>Hello World..!</h1>
          <Parent values={arr} names={names} people={people} />
        </div>
      </>
    );
  }
}

export default App;
