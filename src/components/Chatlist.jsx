import { useEffect, useRef, useState } from "react";

export default function Chatlist(props){
    const [isEditing, setEditing] = useState(true);
    const [newName, setNewName] = useState('');

    function handleSubmit(event) {
        event.preventDefault(); // 阻止表单默认的提交行为
        props.editChat(props.id,newName); 
        setNewName(""); // 提交后将输入框的值重置为空字符串
        setEditing(true);
      }
    
      function handleChange(event) {
        setNewName(event.target.value); // 当输入框的值发生变化时，更新 name 的状态值
      }
    
    const view = (
        <div className="listbackground">
            <div className="leftlist">
                <button
                id={props.id}
                className="titlechat"
                onClick={()=>props.handleid(props.id)}>
                    {props.name}
                </button>
            </div>
            <div className="rightlist">
                <div>
                <button
                className="rl1"
                    type="button"
                    onClick={() => setEditing(false)}
                >
                    编辑
                </button>
                </div>
                <div>
                <button 
                className="rl2"
                type="button"
                onClick={()=>props.deleteChat(props.id)}>
                    删除
                </button>
                </div>
            </div>
        </div>
    );

    const edit = (
        <form onSubmit={handleSubmit}>
            <div className="listbackground2">
            <div className="leftlist2">
                <input
                className="editinput"
                type="text"
                value={newName}
                onChange={handleChange}
                />
            </div>
            <div className="rightlist2">
                <div>
                <button
                className="rl12"
                    type="submmit" >
                    保存
                </button>
                </div>
                <div>
                <button 
                className="rl22"
                type="button"
                onClick={() => setEditing(true)}>
                    返回
                </button>
                </div>   
            </div>
        </div>
        </form>
    );

    return <li>{isEditing ? view: edit}</li> // 根据 showList 的状态决定是否渲染列表
}