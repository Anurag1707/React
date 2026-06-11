// import React from 'react'
import './App.css'


// // hooks - special type of functions
// const App = () => {
//       let name ='Anurag'
//       function abc(){
//         console.log(name);
//         name = "anyyaa"
//          console.log(name);
//       }
//   return (
//     <div>
//       <h1>Username is {name} </h1>
//       <button onClick={abc}>Change user</button>
//     </div>
//   )
// }
// export default App







// //  concept of userstate ye html me value change krta h 
// import React, { useState } from 'react'

// const App = () => {
//   const [a, setA] = useState(10)
//   // a jo readable hai aur SetA write able hai 

//   const ChangeA =()=>{
//     setA(20)
//   }
//   return (
//     <div>
//       <h1>Value is {a} </h1>
//       <button onClick={ChangeA}>Change value</button>
//     </div>
//   )
// }

// export default App





import React, { useState } from 'react'

const App = () => {

  let [Count, setCount] = useState(0)

 const Count1=()=>{
  console.log("helloo");
  
    setCount(Count+1)
 }

 const Count2=()=>{
  setCount(Count-1)
 }
  return (
    <div>
      <h1> {Count} </h1>
      {/* <button onClick={Count1}>Count ++</button>
     <button onClick={Count2}>Count --</button> */}


      <button onClick={()=>setCount(Count+1)}>Count ++</button>
     <button onClick={()=>setCount(Count-1)}>Count --</button>


    </div>
  )
}

export default App