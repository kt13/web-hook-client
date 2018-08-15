import React from "react";
import data from "./state.json";

export default class extends React.Component {
  state = {
    users: null
  };

  componentWillMount() {
    this.setState({
      users: data.map((val, index) => ({ id: index, show: false }))
    });
  }

  dealWithIt(index) {
    console.log(this.state.users);
    console.log(this.state.users[index].show);
    let users = this.state.users;
    users.find((v, i) => i === index).show = !this.state.users[index].show;
    this.setState({
      users: users
    });
    setTimeout(() => {
      console.log("after", this.state.users);
    }, 100);
  }

  render() {
    const users = data.map((val, index) => (
      <li key={index} onClick={() => this.dealWithIt(index)}>
        {val.first_name}
        <div
          style={{
            display:
              this.state.users === null
                ? "none"
                : this.state.users[index].show
                  ? "block"
                  : "none"
          }}
        >
          {(val.first_name, val.last_name, val.email)}
        </div>
      </li>
    ));

    return <ul>{users}</ul>;
  }
}