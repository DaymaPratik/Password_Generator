import './PassApk.css';
import { useState } from "react";
// import { CopyToClipboard } from 'react-copy-to-clipboard';

const PassApk = () => {
    let[range,setRange]=useState(8);
    let [number,setNumber]=useState(false);
    let [symbol,setSymbol]=useState(false);
    let [upperCase,setUpperCase]=useState(false);
    let [lowerCase,setLowerCase]=useState(false);
    // const [copied, setCopied] = useState(false);
    let[pass,setPass]=useState('');
    const includeUpper=(e)=>{
        setUpperCase(e.target.checked);
        
    }
    const includeLower=(e)=>{
        setLowerCase(e.target.checked)
        
    }
    const includeSymbol=(e)=>{
        setSymbol(e.target.checked);
    }
    const includeNumber=(e)=>{
        setNumber(e.target.checked);
    }
    let str ='';
    const generatePassword=(e)=>{
       
        e.preventDefault();
        if(lowerCase) str += 'abcefghijklmnopqrstuvwxyz';
        if(upperCase) str += 'ABCEFGHIJKLMNOPQRSTUVWXYZ';
        if(symbol) str += '!@#$%^&*()_+';
        if(number) str += '1234567890';
        //  console.log(str);
       for (let index = 0; index < range; index++) {
        let randomNo=Math.floor(Math.random()*str.length);
        // console.log(randomNo);
        let char=str.charAt(randomNo);
        setPass(pass+=char);
       }
  
    }
    function copyPassword(event){
        // console.log(pass);
        if(pass===""){
            alert("Please Generate Password First...");
            return;
        }
        navigator.clipboard.writeText(pass);
        event.preventDefault(); // Prevent default behavior (text selection)
        setPass("");
    }
    return (
        <section className='pass-box'>
            
            <div className='op-box'>
            <input type="text" value={pass} className='op-ip' placeholder='Get Your Password Here... ' onChange={(e)=>{e.target.value}}/>
            <button className='copy-btn' onClick={copyPassword}>Copy</button>
            </div>
            <form className='form'>
               <div className='range-div'>
               <label htmlFor='range'>Select Range Between(8 to 25):-<span className='range-display'>{range}</span></label>
                <input type="range" id='range' min={8} max={25} onChange={(e)=>{setRange(e.target.value)}} value={range}/>
               </div>
              <div className='upper-div'>
              <label htmlFor='upper-case' >Include Upper Case:</label>
                <input type="checkbox" id='upper-case' onChange={includeUpper}/>
                
              </div>
              <div className='lower-div'>
              <label htmlFor='lower-case' >Include Lower Case:</label>
                <input type="checkbox"  id='lower-case' onChange={includeLower}/>
                
              </div>
               <div className='symbols-div'>
               <label htmlFor='symbols' >Include Symbols:</label>
                <input type="checkbox"  id='symbols' onChange={includeSymbol}/>
             
               </div>
               <div className='numbers-div'>
               <label htmlFor='numbers' >Include Numbers:</label>
                <input type="checkbox"  id='numbers' onChange={includeNumber}/>
              
               </div>
               <button className='generate-btn' onClick={generatePassword}>Generate Password</button>

            </form>
        </section>
    );
}

export default PassApk;
