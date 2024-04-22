import { useState } from 'react'

function App() {
  const [password, setPassword] = useState("");

  const onSubmit = (e) =>{
    e.preventDefault()

      setPassword("red");
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
