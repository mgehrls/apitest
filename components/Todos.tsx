"use client"

import { useState} from 'react'
import { nanoid } from 'nanoid'

type Todo = {
    id: string,
    text: string,
    done: boolean,
}

const Todos = () => {
    const [showTodos, setShowTodos] = useState(false)
    const [todos, setTodos] = useState([] as Todo[])

    if(!showTodos){
        return(
            <div style={{position:"absolute", top:"0", left:"0"}} onClick={()=>setShowTodos(true)}>Todos</div>

        )

    }

    function addTodo(){
        let newTodo = {text:"", done:false, id:nanoid()}
        setTodos([...todos, newTodo])
    }
    function removeTodo(id: string){
        let newState = todos.filter(item => item.id !== id)
        setTodos(newState)
    }
    function updateTodoText(e: React.ChangeEvent<HTMLInputElement>, id: string){
        let newState = todos.map(todo =>{
            if(todo.id === e.target.id){
                return {...todo, text:e.target.value}
            } else{
                return todo
            }
        })
        setTodos(newState)
    }



    const todoList = todos.map(item =>{
        const todoProps ={
            updateText: updateTodoText,
            remove: removeTodo,
            key: item.id,
            id: item.id,
            text: item.text,
            addTodo: addTodo
        }

        return (
            <Todo {...todoProps} />
        )
    })

    return(
        <div className='todos-container' style={{position:"absolute", top:"0", left:"0"}}>
            <div onClick={()=>setShowTodos(false)}>
                Hide
            </div>
            <div className='todos-controls'>
                <div className="todos-add-btn" onClick={()=>addTodo()}>
                    Add Item
                </div>
            </div>
            <p className='todos-title'>Todo List</p>
            <div className='todo-list-container'>
                {todoList}
            </div>
        </div>
    )
}
interface TodoPropTypes {
    updateText: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    remove: (id: string) => void;
    key: string;
    id: string;
    text: string;
    addTodo: () => void;
}

const Todo = ({updateText, remove, id, text, addTodo}: TodoPropTypes) => {

    let classes = "fa-regular fa-square-check transparent"
    let hoveredClassed = "fa-regular fa-square-check"

    return (
        <div className="todo-container">
            <input 
                autoFocus
                onChange={(e)=> updateText(e, id)} 
                onKeyDown={(e)=>{
                    if(e.key==="Enter"){
                        addTodo()
                    }
                }} 
                onFocus={(e)=>{
                const end = text.length
                e.target.setSelectionRange(end, end)
                e.target.focus()
                }} 
                className="todo-text-box" 
                id={id} type="text" 
                value={text} />
            <div className="remove-todo-icon">
                <button onClick={()=> remove(id)} className={classes}>remove</button>
            </div>
        </div>
    )
}

export default Todos