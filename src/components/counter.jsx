import React, { Component } from "react";

class Counter extends Component {
  // state object
  /*  state = {
    count: this.props.counter.value,
    // imageUrl: "https://picsum.photos/200",
    //tags: ["tag1", "tag2", "tag3"],
  };
*/

  /*handleIncrement = (product) => {
    console.log(product);
    //console.log("incremented!!", this.state.count++);
    //this.state.count++; //reactJs wont notice the increment own its own just by using ++ , so we use setState()
    this.setState({ count: this.state.count + 1 });
  };*/

  //style properties are in camelCase
  /* style = {
    fontSize: 10,
    fontWeight: "bold",
  };*/

  render() {
    //react.fragment to replace div
    //inside react.fragment, <img src={this.state.imageUrl} alt="" />
    //we use className attr in jsx
    //syntax for inline styles, style={{fontSize:30}}
    //using let keyword when modifying else use const.
    //refactor to avoid polluting the render method.
    //we use .map while addressing arrays , in this case its named tags
    //use key attr to set unique value to the property
    //props is basically a plane js object.it can output the attributes that we set in our counters.jsx

    //console.log("props", this.props);

    return (
      <div>
        <span /*style={this.style}*/ className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          // onClick={this.handleIncrement} // here we are not calling handleIncrement , we are just passing it as a reference
          // onClick={() => this.handleIncrement(this.product)}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          //here instead of using onClick={this.handleDelete} , we will use onClick={this.props.onDelete} , because we want to delete counters state in counters.jsx

          //onClick={this.props.onDelete}
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    //can write pure js between {}
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
