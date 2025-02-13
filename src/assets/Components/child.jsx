import React from "react";

class Child extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <h1>Child Component</h1>
        <ul>
          {this.props.people.map((person, index) => (
            <li key={index}>{person.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Child;