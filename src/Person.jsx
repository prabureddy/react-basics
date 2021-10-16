import React from "react";
import "./Person.css";

const Person = ({ details, deleteUser, index }) => {
  //   const details = props.details;
  //   const name = details.name;
  //   const address = details.address;
  //   const age = details.age;
  const { name, age, address } = details;
  return (
    <div className="Person_main">
      <div>{name}</div>
      <div>{address}</div>
      <div>{age}</div>
      <button onClick={() => deleteUser(index)}>Delete User</button>
    </div>
  );
};

export default Person;
