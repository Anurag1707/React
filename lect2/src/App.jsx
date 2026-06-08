// import React from 'react'
// import Todo from './Todo'

// const App = () => {
//   return (
//     <div>
//       <Todo/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import  Cchange  from './Cchange'

// const App = () => {
//   return (
//     <div>
//       <Cchange/>
//     </div>
//   )
// }


// import React from 'react'
// import Header from './MyComponent/Header'
// import Footer from './MyComponent/Footer'
// import Todos from './MyComponent/Todos'

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Footer/>
//       <Todos/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Context from './Context'
// import Home from './Home'

// export const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }


//  export default App



import { useEffect } from "react"
import { useState } from "react"

import React from 'react'
import Home from "./Home"

//main-> app-> A-> b-> C



import NavBar from "./NavBar"

import { Route, Routes } from "react-router-dom"
import Cart from "./Cart"

const App = () => {
  let [apiData,SetApiData] =   useState([])
 let [cart,SetCart]= useState([])
  return (

    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home apiData={apiData}  SetApiData={SetApiData} cart={cart}  SetCart={SetCart}/>}/>
        <Route path="/cart" element={<Cart cart={cart}/>}/>

      </Routes>
    </div>
  )
}

export default App


