import { Header } from "./modulos/header"
import './App.css'
import { Display } from "./modulos/display"
import { useDisplay } from "./Logic/useDisplay"
import { Panel } from "./modulos/panel"
import { useState } from "react"
export function App(){
  const {display,updateDisplay}=useDisplay()
  const [toggle, setToggle] = useState(1)
  const handleClick=(valor)=>{
    updateDisplay(valor)
  }
  const bodyClass=`page ${toggle==2 ? 'page-theme-2': toggle==3 ? 'page-theme-3':'' }`
  return(
    <div className={bodyClass}>
    <main className="main">
      <Header toggle={toggle} setToggle={setToggle}></Header>
      <div className="calculadora">
        <Display display={display} toggle={toggle}/>
       <Panel onButtonClick={handleClick} toggle={toggle}/>
      </div>
    </main>
    </div>
  )
}