import React from "react";

// UserList is the outline for the data elements that will be displayed on the page (image, name, phone, email, dob)
// import SearchForm from "./SearchForm"; 
import UserList from "./UserList";


 // this will render the UserList outline 
const AllUsers = (props) => {
  return (
    // table header below div
    
    <> 
    <div className="container">
  <table style={{width:"100%"}}>
    <thead>
  <tr>
    <th>Picture</th>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Cell</th>
    <th>Email</th>
    <th>Timezone</th>
  </tr>
  
      {props.users.map((user) => (
          // each data index will be mapped out into their own array, so that the page will load different users one by one. 
          // setting the key to the cell will give each index a unique identity
        <UserList key={user.cell} user={user} />
      ))}
      </thead>
      </table>
      </div>
    </>
  );
};

export default AllUsers;
