

// import { StrictMode } from 'react';

function Tweet({ username, name, date, message, color1="blue", backgroundColor1="red" }) {
  const myStyles = {
    color: color1,
    backgroundColor: backgroundColor1,
  };

  return (
    <div>
      <li>{username}</li>
      <li>{name}</li>
      <li>{date}</li>
      <b style={myStyles}>{message}</b>
    </div>
  );

}