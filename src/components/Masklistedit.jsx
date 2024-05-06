import { useEffect, useRef, useState } from "react";


export default function Masklistedit(props){
    const edit = (
        <div>
                <button 
                className="mb1"
                type="button"
                onClick={props.theChange}
                >
                    编辑
                </button>
                </div>   
    );
    
    const ret = (
        <div>
                <button 
                className="mb1"
                type="button"
                onClick={props.theChange}
                >
                    返回
                </button>
                </div>   
    );
    
    return (
        <li>{props.isChange ? edit : ret}</li>
    );

}
