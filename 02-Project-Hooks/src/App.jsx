import { useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {

  const [length,setLength] = useState(8);
  const [numbersAllowed,setNumbersAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPasswordToClipBoard = useCallback(()=>
    {
      passwordRef.current?.select();
      window.navigator.clipboard?.writeText(password);
    },[password])

  const passwordGenerator = useCallback(() => 
    {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(numbersAllowed) str = str + "0123456789";
      if(charAllowed) str = str + "!@#$%^&*(){}?><";

      for (let i = 1; i <= length; i++)
      {
        let char = Math.floor(Math.random() * str.length + 1);
        pass = pass + str.charAt(char);
      }
      setPassword(pass);
    }, [length, numbersAllowed,charAllowed,setPassword]);

    useEffect(() => {passwordGenerator()}, [length,numbersAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md bg-gray-800 text-orange-500 px-4 py-8 my-8 rounded-lg">
        <h1 className="text-white text-center my-3 text-3xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full outline-none px-3 py-3"
            placeholder="Password"
            ref={passwordRef}
          />
          <button className="flex outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 align-middle" onClick={() => {copyPasswordToClipBoard()}}>
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={6}
              max={100}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbersAllowed}
              id="numberInput"
              onChange={() => {setNumbersAllowed((prev) => !prev)}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked = {charAllowed}
              id="characterInput"
              onChange={() => {setCharAllowed((prev) => !prev)}}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
