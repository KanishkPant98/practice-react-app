import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "-",
        location: "-",
      },
      count1: 0,
      componentType: "User Class",
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/KanishkPant98");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: {
        name: json?.login,
        location: "Delhi"
      },
    });
  }
  render() {
    const { name, location } = this.state.userInfo;
    const {count1,componentType} = this.state
    return (
      <div className="m-4 p-4 rounded-lg bg-gray-50">
        <h2>{componentType}</h2>
        <UserContext.Consumer>
            {({loggedInUser})=> loggedInUser && <h2 >Logged In User: {loggedInUser}</h2>}
        </UserContext.Consumer>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <div>
          <h3>Counter1: {count1}</h3>
          <button
            onClick={() => {
              this.setState({
                count1: this.state.count1 + 1,
              });
            }}
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}
export default UserClass;
