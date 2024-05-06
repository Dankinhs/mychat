import { useEffect, useRef, useState } from "react";

export default function Masklist(props){
    
    const view = ( 
            <button 
             className="mb2"
             id={props.mid}
             onClick={()=>props.addChatmask(props.mmasks,props.isChatid)}
             >
               {props.mname}
            </button>
    );

    const del = (
             <button 
              className="mb2"
              type="button"
              onClick={()=>props.deleteMask(props.mid)}
              >
              删除
             </button>
    );
    return (
    <div className="mdd">
        <li>{props.isChange?view:del}</li>

    </div>
    );

    
}