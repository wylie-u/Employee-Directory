// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import API from "./utils/API";
import AllUsers from "./Components/UserList/AllUsers";

class App extends Component {
  constructor() {
    super();
    // setting state to empty array 
    this.state = {
      users: [],
    };
  }
  // when page loads, the randomuser api is called
  componentDidMount() {
    API.search().then((searchedUsers) => {
      console.log(searchedUsers.data.results);
      // state is then updated to variable called users, which will be the results of the api call
      this.setState({ users: searchedUsers.data.results });
    });
  }
  // once api is called, this function will render AllUsers, which is a map of the retrieved data
  render() {
    return (
      <div className="App">
        <AllUsers users={this.state.users} />
      </div>
    );
  }
}

export default App;
