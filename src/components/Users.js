import React, { useState, useEffect } from 'react';
import '../App.css';

function Users() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState('online');
  useEffect(() => {
    let url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then((response) => {
        response.json().then((result) => {
          // console.warn(result);
          setData(result);
          localStorage.setItem('users', JSON.stringify(result));
        });
      })
      .catch((err) => {
        setMode('offline');
        let collection = localStorage.getItem('users');
        setData(JSON.parse(collection));
      });
  }, []);
  return (
    <div className="contentContainer">
      <h2>Users</h2>
      <div>
        {mode === 'offline' ? (
          <div>You are in offline mode and Fetching data from Local Storage</div>
        ) : null}
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
