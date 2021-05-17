// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import API from "./utils/API";
import AllUsers from "./Components/AllUsers";
import SearchForm from "./Components/SearchForm";

// set state to filtered results
class App extends Component {
  constructor() {
    // calls parent constructor with no arguments
    super();
    // setting state to empty array 
    this.state = {
      search: "",
      users: [],
      filterResults: []
    };
    // set search to empty array 
  }
  // when page loads, the randomuser api is called
  componentDidMount() {
    API.search().then((results) => {
      // console.log(searchedUsers.data.results);
      // state is then updated to variable called users, which will be the results of the api call
      this.setState({ users: results.data.results });
    });
  }

  // sort through employees based on search term
  // check if there is a match and set that to empSort for rendering
  // filterEmployees = () => {
  //   let { users, search } = this.state;
  //   let empFilter = users.filter((sorted) => {
  //     return (
  //       sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
  //       sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
  //       sorted.email.toLowerCase().includes(search.toLowerCase())
  //     );
  //   });
  //   this.setState({ empFilter });
  // };

  // // grab search term, activate sorted
  // startSort = (event) => {
  //   this.setState({ search: event.target.value }, () => {
  //     this.sortEmp();
  //     this.setState({ sorted: true });
  //   });
  // };

// each = each element in array
  handleInputChange = (event) => {
    let filterResults = this.state.users.filter((each) => {
      return (
        each.name.first
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        each.name.last
          .toLowerCase()
          .includes(event.target.value.toLowerCase()));
    });
    console.log(filterResults)
    //updating input's state to filtered
    this.setState({ search: event.target.value, results: filterResults });
    
  };



  

  handleFormSubmit = event => {
    event.preventDefault();
    // calling api 
    this.searchEmployees(this.state.search);
  };

  


  
  // once api is called, this function will render AllUsers, which is a map of the retrieved data
  render() {
    return (
      <div className="App">
        <SearchForm 
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
        search={this.search} 
         />
        <AllUsers users={this.state.users} /> 
      </div>
    );
  }
}

export default App;
