import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const notes = [
  { id: 1, content: "HTML is easy", important: true },
  { id: 2, content: "Browser can execute only Javascript", important: false },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

import axios from "axios";

// Axios
// const promise = axios.get("http://localhost:3001/notes");
// console.log(promise);

//.then
// fetch("http://localhost:3001/notes").then((response) =>
//   response.json().then((response) => console.log(response))
// );

// most basic await
// try {
//   const response = await fetch("http://localhost:3001/notes");
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error("error:", error);
// }

// full await/async implementation
// async function getData() {
//   const url = "http://localhost:3001/notes";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <App notes={notes} />
);
