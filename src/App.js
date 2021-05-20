import "./App.css";
import { Component } from "react";
import API from "./utils/API";
import AllUsers from "./Components/AllUsers";
import SearchForm from "./Components/SearchForm";
import UserSort from "./Components/UserSort";




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


// each = each element in array
  handleInputChange = (event) => {
    
    this.setState({search:event.target.value})
    
  };

// emailSorting = () => {
//   const sortedUsers =this.state.users.sort((a,b)=>
//   console.log()
//   );
//   this.setState(users: sortedUsers)
// }


  
  // once api is called, this function will render AllUsers, which is a map of the retrieved data
  render() {
    let filterResults = this.state.users.filter((each) => {
      return (
        each.name.first
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        each.name.last
          .toLowerCase()
          .includes(this.state.search.toLowerCase()));
    });
    return (
      <div className="App">
        <div className="background">
        <div className="header">
          <h1 className="display-4">Employee Directory</h1>
          <p> Search for an employee by entering their name or email below.</p>
          
          <SearchForm 
        handleInputChange={this.handleInputChange}
        name={this.search}
         />
        </div>
        {/* <UserSort emailSort={this.emailSort}/> */}
        <AllUsers users={filterResults} /> 
      </div>
      </div>
     
      
    );
  }
}

export default App;
