// given an api endpoint
// call the api https://jsonplaceholder.typicode.com/users
// clicking on a users name stores their name in local storage 
// clicking another name will replace stored name 

"use client";

import React, { useEffect, useState } from "react";

export default function ApiComponent() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // fetch().then
    // fetch takes url as argument as string
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    // use .map to create a list of all users
    <>
      <div>
        <input
          style={{ backgroundColor: "white", color: 'black' }}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>

      {users
        ?.filter((user) => user.name.includes(search))
        .map((user) => (
          <div onClick={() => localStorage.setItem('name', JSON.stringify(user.name)) } key={user.id}>{user.name}</div>
        ))}
    </>
  );
}

// need to stringify the data 
// localStorage.setItem(key, JSON.stringify(user.name))
// localStorage.setItem( name, user.name)

// localStorage.getItem(key)
// name = JSON.parse(localStorage.getItem(name))
