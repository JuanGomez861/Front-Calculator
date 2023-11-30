import './display.css'
export function Display({display,toggle}){

    const classDisplay=`display ${toggle==2 ? 'display-theme-2' : toggle==3 ?'display-theme-3':''}`
    return(
        <div className={classDisplay}>{display && display}</div>
    )
}