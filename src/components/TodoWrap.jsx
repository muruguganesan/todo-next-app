import TodoItems from '@/components/TodoItems'
export default function TodoWrap ({todoJSON,setTodoJSON}) {
    console.log(todoJSON);
    return (
        <>
        {todoJSON.length>0?<TodoItems todoJSON={todoJSON} setTodoJSON={setTodoJSON} />:<div className="no_todos">Add Some Todos!!!</div>}
        </>
    )
}