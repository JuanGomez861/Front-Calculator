import { useEffect, useState } from "react"

const simbols=['+','-','*','/']
export const useDisplay=()=>{
  const [display,setDisplay]=useState('')
 
    useEffect(()=>{
      console.log(display)
    },[display])

    
    const updateDisplay=(valor)=>{
      
      if(simbols.includes(display.slice(-1)) && simbols.includes(valor)) return;
      if(!display && simbols.includes(valor))return;
     
      if(valor=='='){
        setDisplay(eval(display).toString())
        return
      }

      if(valor=='RESET'){
    
        setDisplay('')
        return
      }
      if(valor=='DEL'){
        
        setDisplay((prev)=>prev.slice(0,-1))
        return
      }
      
    
      
      setDisplay((prev)=>prev+=valor)
    }

    return {display,updateDisplay}
  }


const del='DEL'
console.log(del.slice(0,-1))