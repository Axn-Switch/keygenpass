import { useState } from 'react'
import words from './values/words.json'

function App() {
  const [password, setPassword] = useState("");

  const onSubmit = (e) =>{
      e.preventDefault()

      let pword = "";
      ;

      //first algorithm
      //setPassword(pwordtype1(pword).toString());

      setPassword(pwordtype2());
  }

  const pwordtype1 = (pword: String) => {
    //first algorithm to generate a password of 10 characters
    for(var i = 1; i <= 16; i++){
      pword += String.fromCharCode(Math.random() * (126 - 32) + 32);
    }
    return pword;
  }

  const pwordtype2 = () => {
    let arr = [];

    for(var i = 1; i <= 7; i++){
      let num: number = Math.floor(Math.random() * (0 - 120) + 120);
      if(i > 2){
        arr.push(String.fromCharCode(Math.random() * (126 - 32) + 32));
      }else
      arr.push(words.words[num]);
    }

    return arr.join("")
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
