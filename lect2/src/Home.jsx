// import React, { useContext } from 'react'
// import Context from './Context'

// const Home = () => {
//     let data = useContext(Context)
//     console.log(data)
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react'
import './App.css'
const Home = ({apiData,SetApiData,cart,SetCart}) => {

  console.log(cart,"carttttt");
  
     

    
  useEffect(()=>{
   async function apiCall(){

  let res=   await   fetch("https://dummyjson.com/products")
       let data=       await res.json()
       console.log(data);
       SetApiData(data.products)
       

    }
    apiCall()

  },[])












  

  return (
    <div id='card'>
      {
        apiData.map((a)=>{
          return(<div id='main_card'>
            <h6>{a.price}</h6>
          <img   src={a.thumbnail}/>
          {/* <h4>{a.title}</h4> */}
          
          <button onClick={()=>SetCart([...cart,a])}>add</button>
          </div>)
        })
      }
    </div>
  )
}

export default Home