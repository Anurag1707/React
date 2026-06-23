// import React, { useState, useEffect } from 'react'
// const App = () => {
//     let [input,SetInput] = useState("")
//         function fun1(e){
//             setInput(e.target.value)
//             console.log(input);
//         }
//         return (
//             <div>
//                 <h2>{input}</h2>
//                 <input type="text" name = ' input' placeholder='enter your name' />
//                 <button></button>
//             </div>
//         )
// }

// export default App



// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }




// const App = () => {
//   let [count,SetCount]= useState(0)
//   //let [city,setCity]=useState("Goa")
//   let [ApiData,SetApiData]= useState()

//   useEffect(()=>{
//     //console.log("hello");

//     async function call(){
//       let res= await fetch('https://jsonplaceholder.typicode.com/todos/')
//       let data = await res.json()
//       //console.log(data);
//       SetApiData(data)
//     }
//     call()
//   },[])

//   return(
//     <div>
//       <h2>{count}</h2>
//       <h4>{city}</h4>
//       <button onClick={()=>setCity("Manali")}>change </button>
//       <button onClick={()=>SetCount(count+1)}>click</button>
//     </div>
//   )
// }
// export default App

// const App = () => {
//       let [ApiData,SetApiData]=    useState([])
//       useEffect(()=>{
//               //  console.log("hello"); 
//               async  function call(){
//                 let res=  await  fetch("https://dummyjson.com/products")
//                 let data=        await   res.json()
//                 console.log(data.products);
//                 SetApiData(data.products)
//               }
//               call()
//       },[])
      
//   return (
//     <div id="parent_div"   className="">
//         {
//           ApiData.map((a)=>{
//                return(
//                 <div id="card">
//                   <h1>{a.id}</h1>
//                   <img  src={a.thumbnail}/>
//                 </div>
//                )
//           })
//         }
//     </div>
//   )
// }


// import React, { useState, useEffect } from "react";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [error, setError] = useState("");

//   // Load all products initially
//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleSearch = async () => {
//     // Input Validation
//     if (search.trim() === "") {
//       setError("Search field cannot be empty!");
//       return;
//     }

//     setError("");

//     try {
//       const res = await fetch(`https://dummyjson.com/products/search?q=${search}` );
//       const data = await res.json();
//       setProducts(data.products);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }} id='body'>
//       <h1>Product Listing</h1>

//       <input type="text" placeholder="Search Product..." value={search} onChange={(e) => setSearch(e.target.value)}
//       />

//       <button onClick={handleSearch}>Search</button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <div>
//         {products.map((product) => (
//           <div id='product'
//             // key={product.id}
//             // style={{
//             //   border: "1px solid gray",
//             //   margin: "10px",
//             //   padding: "10px",
              
//             // }}
//           >
//             <h3>{product.title}</h3>
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//               width="100"
//             />
//             <p>Price: ${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from 'react'

// export const App = () => {
//   return (
//     <div >
//       <task/>
//     </div>
//   )
// }


// import React from 'react'
// import Task from "./Task"

// const App = () => {
//   return (
//     <div>
//       <Task/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import NavBar from "./Navbar"
// import { Route, Routes } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Task from "./Task"

// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route    path="/"   element={<Home/>}/>
//         <Route    path="/about"   element={<About/>}/>
//         <Route    path="/task"   element={<Task/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App