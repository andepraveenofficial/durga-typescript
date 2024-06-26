import React, { useRef } from 'react'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
}

const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(e)=>{
        handleAdd(e)
        inputRef.current?.blur();
    }}>
      <input ref={inputRef} type='text' placeholder='enter a task' value={todo}
      onChange={
        (e)=>setTodo(e.target.value)
      }/>
      <button type='submit'>Go</button>
    </form>
  )
}

export default InputField
