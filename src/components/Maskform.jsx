import { useDeferredValue, useEffect, useRef, useState } from "react";

export default function Maskform(props){
    const [isEditing, setEditing] = useState(true);
    const createButton = useRef(null);
    const editButton = useRef(null);
    const [mname, setMname] = useState('');
    const [masks,setMasks] = useState('');

    function handleSubmit(event) {
        event.preventDefault(); // 阻止表单默认的提交行为
        props.addMask(mname,masks); 
        setMname(""); 
        setMasks("");
        setEditing(true);
      }
    
      function handleChange1(event) {
        setMname(event.target.value); 
      }
      function handleChange2(event) {
        setMasks(event.target.value); 
      }

    const createNewMask = (
        <div>
            <button
            className="mb1"
            type="button"
            onClick={()=>{
                setEditing(false);
            }}
            ref={createButton} >
                添加新角色
            </button>
        </div>
    )
    const editNewMask = (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="createmasklable1">
                    请输入名称
                </label><br/>
                <input
                className="createmaskname"
                type="text"
                value={mname} 
                onChange={handleChange1} 
                /><br/>
                <label className="createmasklable2">
                    请输入预设内容
                </label><br/>
                <input
                className="createmaskinput"
                type="text"
                value={masks} 
                onChange={handleChange2} 
                />
            </div>
            <div >
                 <button
                 className="queren"
                     type="submit"
                     >
                      确认
                 </button>
                <button
                className="quxiao"
                    type="button"
                    onClick={()=>{
                        setEditing(true);
                     }}
                     ref={editButton}
                     >
                        取消
                 </button>
             </div>
        </form>
    )

    
    return <li >{isEditing ? createNewMask : editNewMask}</li>;
}