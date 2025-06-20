// Calculator

// import { useState } from "react";

// function App() {
//   const [num1, setNum1] = useState("");
//   const [num2, setNum2] = useState("");
//   const [res, setRes] = useState("");

//   function handleOperation(operation) {
//     const a = parseFloat(num1);
//     const b = parseFloat(num2);

//     if (isNaN(a) || isNaN(b)) {
//       setRes("Enter valid Input !");
//       return;
//     }

//     switch (operation) {
//       case "+":
//         setRes(a + b);
//         break;
//       case "-":
//         setRes(a - b);
//         break;
//       case "*":
//         setRes(a * b);
//         break;
//       case "/":
//         setRes(a / b);
//         break;
//       default:
//         setRes("Select Correct Operation !");
//     }
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h1>Simple React Calci</h1>
//       <input
//         type="number"
//         placeholder="Enter Num 1"
//         value={num1}
//         onChange={(e) => {
//           setNum1(e.target.value);
//         }}
//       />
//       <br />
//       <br />
//       <input
//         type="number"
//         placeholder="Enter Num2"
//         value={num2}
//         onChange={(e) => {
//           setNum2(e.target.value);
//         }}
//       />
//       <br />
//       <div style={{ margin: "10px" }}>
//         <button
//           onClick={() => {
//             handleOperation("+");
//           }}
//         >
//           +
//         </button>
//         <button
//           onClick={() => {
//             handleOperation("-");
//           }}
//         >
//           -
//         </button>
//         <button
//           onClick={() => {
//             handleOperation("*");
//           }}
//         >
//           *
//         </button>
//         <button
//           onClick={() => {
//             handleOperation("/");
//           }}
//         >
//           /
//         </button>
//       </div>
//       <h2>Result : {res} </h2>
//     </div>
//   );
// }
// export default App;

// AXIOS
// import { useState, useEffect } from "react";
// import axios from "axios";
// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setUsers(response.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to fetch users !");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading users .... </p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <ul>
//         {users.map((user) => {
//           <li key={user.id}>
//             <h3>{user.name}</h3> - {user.email}
//           </li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default App;
