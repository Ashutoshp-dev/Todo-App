import { useRef, useState } from 'react'
import './App.css'
import { ToastContainer, toast,Bounce } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import gsap from 'gsap';
  import { useGSAP } from '@gsap/react';
function App() {
    let [todoList,setTodoList]=useState([])
    let [inputValue,setInputValue]=useState("")
    useGSAP(()=>{
      let t1=gsap.timeline()
      t1.from(".overlay",{duration:2,opacity:0,ease:"sine.inOut"})
      t1.from(".container",{y:200, duration:2,opacity:0,ease:"power1.inOut"})
      t1.from(".input",{x:200, duration:1,opacity:0,ease:"power1.inOut"})
      
    },[])
    function handleChange(e){
        setInputValue(e.target.value)
    }
    function handleAdd(){
      if(inputValue!==""){
          setTodoList([...todoList,{text:inputValue,isCompleted:false}])
          setInputValue("")
      }
      else{
          toast.warn("Value daal na pehle",{transition: Bounce})
      }
    }
    function handleDlt(idx){
        const finalTodo=todoList.filter((_,i)=>{return(idx!==i)})
        setTodoList(finalTodo)
    }
    function handleDone(idx){
        const newTodo=todoList.map((todo,i)=>{
          return idx===i?{...todo,isCompleted:!todo.isCompleted}:todo
        })
        setTodoList(newTodo)
    }
    return(
      <>
        <ToastContainer />
        <div className="overlay"></div>
        <div className="container">
        <h1>MY &nbsp;TODOLIST</h1>
        <div className="form">
          <div className="overlay-box"></div>
        <div className="input">
            <input type="text" placeholder='Enter your Task' onChange={handleChange} value={inputValue}/>
            <button onClick={handleAdd} >Add</button>
        </div>
      <div className='task-container'>
          {todoList.map((e,idx)=>{
            return(
              <>
                  <div  className='tasks' key={idx}>
                      <h3 style={{textDecoration:e.isCompleted?"line-through":"none"}}>{e.text}</h3>
                      <div className="span">
                          <button onClick={()=>handleDone(idx)}>{e.isCompleted?"Not Done":"Done"}</button>
                          <span onClick={()=>handleDlt(idx)}>&times;</span>
                      </div>
                  </div>
              </>
            )
          })}
      </div>
        </div>
        </div>
      </>
    )
}

export default App
