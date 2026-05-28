// import React, { useState } from 'react'
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



import React from 'react'
import Form from './Form'

const App = () => {
  return (
    <div>
      <Form/>
    </div>
  )
}

export default App