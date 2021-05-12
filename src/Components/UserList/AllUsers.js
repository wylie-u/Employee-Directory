import React from "react";
// UserList is the outline for the data elements that will be displayed on the page (image, name, phone, email, dob)
import UserList from "./UserList";
 // this will render the UserList outline 
const AllUsers = (props) => {
  return (
    <div>
      {props.users.map((user) => (
          // each data index will be mapped out into their own array, so that the page will load different users one by one. 
          // setting the key to the cell will give each index a unique identity
        <UserList key={user.cell} user={user} />
      ))}
    </div>
  );
};

export default AllUsers;
