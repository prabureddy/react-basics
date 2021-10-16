import { useState } from "react";
import Person from "./Person";
import "./Persons.css";

const Persons = () => {
  const [users, setUsers] = useState([
    {
      name: "Ram",
      address: "Kolkata",
      age: 33,
    },
    {
      name: "Bicky",
      address: "Bangalore",
      age: 24,
    },
    {
      name: "Prabu",
      address: "Chennai",
      age: 21,
    },
    {
      name: "Tharun",
      address: "Delhi",
      age: 30,
    },
  ]);

  const initialInputData = {
    name: "",
    address: "",
    age: 0,
  };

  const [inputData, setInputData] = useState(initialInputData);

  const handlerInputChange = (value, fieldName) => {
    setInputData({
      ...inputData,
      [fieldName]: value,
    });
  };

  const addUserToList = () => {
    setUsers([...users, inputData]);
    setInputData(initialInputData);
  };

  const handlerDeleteUser = (index) => {
    setUsers(
      users.filter((_, userIndex) => {
        return index !== userIndex;
      })
    );
  };

  return (
    <div className="Persons__main">
      <div className="Persons__input">
        <input
          type="text"
          placeholder="Name"
          value={inputData.name}
          onChange={(event) => handlerInputChange(event.target.value, "name")}
        />
        <input
          type="text"
          placeholder="City"
          value={inputData.city}
          onChange={(event) =>
            handlerInputChange(event.target.value, "address")
          }
        />
        <input
          type="number"
          placeholder="Age"
          value={inputData.age}
          onChange={(event) => handlerInputChange(event.target.value, "age")}
        />
        <button onClick={() => addUserToList()}>Add User</button>
      </div>
      {users.map((user, index) => {
        return (
          <Person
            key={index}
            index={index}
            details={user}
            deleteUser={(index) => handlerDeleteUser(index)}
          />
        );
      })}
    </div>
  );
};

export default Persons;
