import { useState } from "react"
import './header.css'
export function Header({toggle,setToggle}) {
    
    const handler=(n) => {
        setToggle(n)
    }
    const classNameHeader=`header ${toggle==2 ? 'header-theme-2':toggle==3? 'header-theme-3':''}`
    const toggleClass=`toggle ${toggle==2 ?'toggle-theme-2':toggle==3 ?'toggle-theme-3':''}`
    const conatinerToggleClass=`toggle_container ${toggle==2 ?'t-c-theme-2':toggle==3 ? 't-c-theme-3':''} `
    return (
        <header className={classNameHeader}>
            <p>Calc</p>
            <div className="theme">
                <div className="Numbers"><p className="numero">1</p><p className="numero">2</p><p className="numero">3</p></div>
                <span>Theme</span>
                <div className={conatinerToggleClass}>
                    <section className='toggle_grid'onClick={() => handler(1)}>
                        {toggle == 1 && <div className={toggleClass}></div>}
                    </section>
                    <section className='toggle_grid' onClick={() => handler(2)}>
                        {toggle == 2 && <div className={toggleClass}></div>}
                    </section>
                    <section className='toggle_grid' onClick={() => handler(3)}>
                        {toggle == 3 && <div className={toggleClass}></div>}
                    </section>
                </div>
            </div>
        </header>
    )
}