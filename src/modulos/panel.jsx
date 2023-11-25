import './panel.css'
const text=['7','8','9','DEL','4','5','6','+','1','2','3','-','.','0','/','*','RESET','=']
export function Panel({onButtonClick,toggle}){
    const classTabel=`table ${toggle==2 ? 'table-theme-2':''}`
    const cellTabel=`cell ${toggle==2 ? 'cell-theme-2':''}`
    return (<table className={classTabel}>
    {text.map((x,y)=>{
      return (<div key={y} className={cellTabel} onClick={()=>onButtonClick(x)}>{x}</div>)
    })}
  </table>)
}