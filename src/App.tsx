import { useState } from 'react'
import words from './values/words.json'

function App() {
  const [password, setPassword] = useState("");

  const onSubmit = (e) =>{
      e.preventDefault()

      let pword = "";
      //first algorithm to generate a password of 10 characters
      for(var i = 1; i <= 16; i++){
        pword += String.fromCharCode(Math.random() * (126 - 32) + 32);
      }
    
      setPassword(pword);
  }


  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='pane'>
          <input type='text' id='password' name='password'value={password} readOnly/>
        </div>
        <div>
          <button>Generate</button>
        </div>
      </form>

    </>
  )
}

export default App
