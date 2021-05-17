import React from "react";

// UserList is the outline for the data elements that will be displayed on the page (image, name, phone, email, dob)
const UserList = (props) => {
  return (
    
    // <tbody> 
      <tr>
        <td>
      <img alt="user" src={props.user.picture.thumbnail}></img>
      </td>
      <td>{props.user.name.first}</td>
      <td>{props.user.name.last}</td>
      <td>{props.user.cell}</td>
      <td>{props.user.email}</td>
      <td>{props.user.location.timezone.description} </td>
      </tr>
    // </tbody>
  );
};
// we'll export this file and call it in AllUsers, which will be used to map out each index into their own array to display on the page
export default UserList;
