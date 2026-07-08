// import React from 'react'
// import './App.css'


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





// import React, { useState } from 'react'

// const App = () => {

//   let [Count, setCount] = useState(0)

//  const Count1=()=>{
//   console.log("helloo");
  
//     setCount(Count+1)
//  }

//  const Count2=()=>{
//   setCount(Count-1)
//  }
//   return (
//     <div>
//       <h1> {Count} </h1>
//       <button onClick={Count1}>Count ++</button>
//      <button onClick={Count2}>Count --</button>
     
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
//   let [name, setname] = useState("Anurag")

//   function change(){
//     console.log("hello");
    
//     setname("annnnn")
//   }
//   return (
//     <>
//       <h1 className='text-6xl bg-red-600'>{name}</h1>
//       <button className='bg-blue-600 border-2 px-2 rounded-lg' onClick={change}>name change</button>
//     </>
//   )
// }

// export default App



// import './App.css'

// import React from 'react'

// const App = () => { 
//   const submitHandle = (e) => {
//     e.preventDefault() //isko lagne se reload na hokr text gyb nhi hota 
//     console.log("heeeii");
    
//   }
   
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandle(e)
//       }} >
//       {/* <form onSubmit={submitHandle}> */}
//         <input
//          className='px-3 py-3 mt-2 ml-5 bg-amber-100 text-xl border-2 rounded-4xl '
//          type="text"
//          placeholder='Enter your name' 
//         />

//         <button className='bg-cyan-400 px-3 py-2 font-semibold border-2 rounded-2xl m-3 '>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App



// two way binding
// import './App.css'

// import React, { useState } from 'react'

// const App = () => { 
//    const [username, setusername] = useState('')

//   const submitHandle = (e) => {
//     e.preventDefault() //isko lagne se reload na hokr, text gyb nhi hota 
//     console.log(username);
//     setusername('')
    
//   }
   
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandle(e)
//       }} >

//       {/* <form onSubmit={submitHandle}> */}
//         <input
//           value={username} // screen me pehle se dikhegaa
//          onChange={(e)=>{
//           setusername(e.target.value);
//          }}
         
//          className='px-3 py-3 mt-2 ml-5 bg-amber-100 text-xl border-2 rounded-4xl '
//          type="text"
//          placeholder='Enter your name' 
//         />

//         <button 
//         className='bg-cyan-400 px-3 py-2 font-semibold border-2 rounded-2xl m-3 '
//         >Submit</button>

//         <h1>{username}</h1>

        
//       </form>
//     </div>
//   )
// }

// export default App




import React, { useState } from 'react'

const App = () => {
   const [name, setname] = useState("")

  const submitHandle =(e)=>{
    // e.preventDefault()
    console.log(name);
    setname('')
  }
  return (
    <div>
      <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder='enter your naam' />
      <button onClick={(e)=>{submitHandle(e)}}>Submit</button>
      <h1>{name}</h1>
      <h1>hiiiii</h1>
      
      
      

    </div>
  )
}

export default App