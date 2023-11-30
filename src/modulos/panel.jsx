import './panel.css'
const text=['7','8','9','DEL','4','5','6','+','1','2','3','-','.','0','/','*','RESET','=']
export function Panel({onButtonClick,toggle}){
    const classTabel=`table ${toggle==2 ? 'table-theme-2':toggle==3 ?'table-theme-3':''}`
    const cellTabel=`cell ${toggle==2 ? 'cell-theme-2':toggle==3 ? 'cell-theme-3':''}`
    return (<table className={classTabel}>
    {text.map((x,y)=>{
      return (<div key={y} className={cellTabel} onClick={()=>onButtonClick(x)}>{x}</div>)
    })}
  </table>)
}