import React from "react";
// UserList is the outline for the data elements that will be displayed on the page (image, name, phone, email, dob)
const UserList = (props) => {
  return (
    <div>
      <img alt="user" src={props.user.picture.thumbnail}></img>
      <p>
        {props.user.name.first} {props.user.name.last}
      </p>
      <p>{props.user.cell}</p>
      <p>{props.user.email}</p>
      <p>{props.user.dob.date} </p>
    </div>
  );
};
// we'll export this file and call it in AllUsers, which will be used to map out each index into their own array to display on the page
export default UserList;
