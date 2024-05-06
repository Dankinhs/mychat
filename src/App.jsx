import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Chatlist from './components/Chatlist';
import Maskform from './components/Maskform';
import Masklist from './components/Masklist';
import { useState,useEffect,useRef } from 'react';
import Masklistedit from './components/Masklistedit';
import OpenAI from 'openai';



function App(props) {

  let [editCount,setEditCount]=useState(0);
  let [editCount2,setEditCount2]=useState(0);
  const [chats,setChats]=useState();
  const [masks,setMasks]=useState();
//控制mask按钮切换
  const [isChange,setChange]=useState(true);
  const theChange =()=>{setChange(!isChange)};
//保存临时的chat的id
const [isChatid,setChatid]=useState(null);
const handleid=(id)=>{
  console.log("prpps.id"+id);
  setChatid(id);
};

  // 当编辑计数器变化时，获取最新任务列表
  useEffect(() => {
    fetch("http://localhost:8080/chat/all").then(
      (res) => { return res.json(); } // 发送请求获取所有任务
    ).then((value) => {
      setChats(value); // 更新任务列表
    })
  }, [editCount])

  useEffect(() => {
    fetch("http://localhost:8080/mask/allm").then(
      (res) => { return res.json(); } 
    ).then((value) => {
      setMasks(value); 
    })
  }, [editCount2])

  //chat列表
  const chatlist = chats ?chats.map ((chat)=>(
    <Chatlist
    id={chat.id}
    name={chat.name}
    editChat={editChat}
    deleteChat={deleteChat}
    handleid={handleid}
    />
  )):[];
  //mask列表
  const masklist = masks ?masks.map ((mask)=>(
    <Masklist
    mid={mask.mid}
    mname={mask.mname}
    mmasks={mask.masks}
    isChange={isChange}
    deleteMask={deleteMask}
    addChatmask={addChatmask}
    isChatid={isChatid}
    />
  )):[];


  function editChat(id,newName){
    fetch("http://localhost:8080/chat/update?id=" + id +"&name=" + newName, { method: "post" }).then(
      (res)=>{
         setEditCount(++editCount);
        })}

  function addChat(name){
    fetch("http://localhost:8080/chat/add?name=" + name,{method:"post"}).then(
      (res)=>{
        setEditCount(++editCount);// 提交任务后，更新编辑计数器
       })} 
  function addChatmask(mmasks,isChatid){console.log("==============================================")
    fetch("http://localhost:8080/chat/addmask?id=" + isChatid +"&themask=" + mmasks,{method:"post"}).then(
      (res)=>{
        
        setEditCount(++editCount);// 提交任务后，更新编辑计数器
       })} 
  
  
   function deleteChat(id){
    fetch("http://localhost:8080/chat/delete?id=" + id, { method: "post" }).then(
      (res)=>{
         setEditCount(++editCount);
        })}

  //mask部分
  function addMask(mname,mmasks){
    fetch("http://localhost:8080/mask/addm?mname=" + mname +"&masks=" + mmasks,{method:"post"}).then(
      (res)=>{
        setEditCount2(++editCount2);
       })} 

  function deleteMask(mid){
    fetch("http://localhost:8080/mask/deletem?mid=" + mid, { method: "post" }).then(
      (res)=>{
         setEditCount2(++editCount2);
        })}
  

  const rightmask=(
    <div className="rightpagestyle">
        <div className='right0'><h1>角色选择</h1></div>
        <div className='right1'>
          <Maskform addMask={addMask}/>
          <Masklistedit theChange={theChange} isChange={isChange}/>
        </div>
        <div className='right2'>
        {masklist}
        </div>
      </div>
  );
  const rightchat=(
    <div><h1>11111</h1></div>
  );
  return (
    <div className="background">
      
      <div className="leftpagestyle">
        
        <ul className="leftlist" >
        <h1>chatchat</h1>
        <Form addChat={addChat}/>
        {chatlist}
       </ul>
      </div>
      {rightmask}
      
      

      

    </div>

    
   
  );
}

export default App;
