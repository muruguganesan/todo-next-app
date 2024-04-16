import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm({ setTodoJSON }) {
    function useUniqueId(prefix) {
        const idRef = useRef(0);
        return `${prefix}-${idRef.current++}`;
      }
      const uniqueId = useUniqueId('todo');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const inputValue = event.target.elements.taskInput.value;
        const regex = /^(?=.*\S).+$/;
        
        if(regex.test(inputValue)) {
 
            setTodoJSON((prevTodos) => [...prevTodos, {
                id: uniqueId,
                text: inputValue,
                complete: false,
            }]);
        }
        

        event.target.reset();
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form_wrap">
                <div className="form_left">
                    <input type="text" placeholder="Write your next task" name="taskInput" />


                </div>
                <div className="form_right">
                    <button className="add_btn">
                        <span className="horizontal_bar bar"></span>
                        <span className="vertical_bar bar"></span>
                    </button>
                </div>

            </div>
        </form>
    )
}