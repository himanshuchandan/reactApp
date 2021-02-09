import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = { ...this.state.counters }; // this will clone counters in state.
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          //here we will create a prop inside our Counter component called as onDelete which we can use to call in our counter.jsx
          <Counter
            key={counter.id} //key attr is used internally by react , thats why we pass id attr at line 28.
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            /*value={counter.value}
            id={counter.id}
            */
            // rather then creating the above props for counter , we can simply create a counter object which will create all the counter properties.
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
