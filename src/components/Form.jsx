import { useDeferredValue, useEffect, useRef, useState } from "react";

export default function Form(props){
    const [isEditing, setEditing] = useState(true);
    const createButton = useRef(null);
    const editButton = useRef(null);
    const [name, setName] = useState('');

    function handleSubmit(event) {
        event.preventDefault(); // 阻止表单默认的提交行为
        props.addChat(name); // 调用父组件传递过来的 addTask 函数，将任务添加到任务列表中
        setName(""); // 提交后将输入框的值重置为空字符串
        setEditing(true);
      }
    
      function handleChange(event) {
        setName(event.target.value); // 当输入框的值发生变化时，更新 name 的状态值
      }

    const createNewChat = (
        <div>
            <button
            className="createchat"
            type="button"
            onClick={()=>{
                setEditing(false);
            }}
            ref={createButton} >
                创建新对话
            </button>
        </div>
    )
    const editNewChat = (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="createchatlable">
                    请输入对话标题
                </label><br/>
                <input
                className="createchatinput"
                type="text"
                value={name} // 输入框的值由 name 状态控制
                onChange={handleChange} // 输入框值发生变化时调用 handleChange 函数
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

    
    return <li >{isEditing ? createNewChat : editNewChat}</li>;
}


