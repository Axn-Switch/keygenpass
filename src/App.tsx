import { useEffect, useState } from 'react'
import words from './values/words.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(0);
  const [result, setResult] = useState(0);

  const onSubmit = (e: any) =>{
      e.preventDefault()

      let pword = "";

      //first algorithm
      //setPassword(pwordtype1(pword).toStrin g());
      if(result == 1){
        setPassword(pwordtype1());
      }
      else if(result == 2){
        setPassword(pwordtype2(pword).toString())
      }
      else{
        console.log("still working on this oops")
      }
  }

  const pwordtype2 = (pword: String) => {
    //first algorithm to generate a password of 10 characters
    for(var i = 1; i <= 16; i++){
      pword += String.fromCharCode(Math.random() * (126 - 32) + 32);
    }
    return pword;
  }

  const pwordtype1 = () => {
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

  //adding the switch in the buttons for the password changer
  const passwordlvl = (e: any) => {
      e.preventDefault()
      setChecked(1)

      setResult(e.target.value);
  }

  
  const clipboardCopy = () => {
    navigator.clipboard.writeText(password)
    toast.success("Copied to Clipboard")
    
  }
 
  /* useEffect(() => {
    const clipClick = () => {
      toast.success("Copied to Clipboard")
      
    }
    const clipboardCopy = () => {
      navigator.clipboard.writeText(password)
      clipClick();
    }
  
  }) */
  

  return (
    <>
    
      <div>
        <div className='pane'>
          <input type='text' id='password' name='password'value={password} readOnly className=" text-4xl rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"/>

          {password.length < 1 ? <button onClick={clipboardCopy} title='copy text' disabled>copy</button> : <button onClick={clipboardCopy} title='copy text'>copy</button>}
        </div>
        <div>
          <button onClick={passwordlvl} value={1} className=" bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Standard</button>
          <button onClick={passwordlvl} value={2} className=" bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Super Strong</button>
        </div>
        <div>{!checked ? <button onClick={onSubmit} disabled>Generate</button> : <button onClick={onSubmit} >Generate</button>}
        </div>
      </div>
    
      <ToastContainer
        position="top-center"
        autoClose={700}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
    </>
  )
}

export default App
