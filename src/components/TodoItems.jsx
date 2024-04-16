import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

export default function TodoItem({todoJSON,setTodoJSON}) {
    const handleCheckedFn = (k)=> {
        let myArr = [...todoJSON];
        for(let ele of myArr) {
            if(ele.id===k) {
                ele.complete=!(ele.complete);
            }
        }

        setTodoJSON(myArr);
    }

    const handleDeleteFn=(k)=> {

        setTodoJSON(todoJSON.filter(ele=> ele.id!==k));
    }

    return (
        <div className="todoItems">
            {
                todoJSON.map((ele,index)=><div key={index} className="todo_item_w">
                    <div className="todo_item">
                    <div className="todo_item_lft">
                        <button className={`rnt_btn ${ele.complete?"checked":""}`} onClick={()=>handleCheckedFn(ele.id)}></button>
                        <span className="todo_tx">{ele.text}</span>
                    </div>
                    <div className="todo_item_rgt">
                        <button className="edit_btn modifier_btn" data-tooltip-id="edit-tooltip" data-tooltip-content="Edit" data-tooltip-place="top">
                            <img src="https://res.cloudinary.com/djdqpnyx4/image/upload/v1713192017/edit_s9tss9.svg" alt="edit" className="edit_img edit_delete_im" />
                        </button>
                        <Tooltip id="edit-tooltip" />
                        <button className="delete_btn modifier_btn" onClick={()=>handleDeleteFn(ele.id)}  data-tooltip-id="delete-tooltip" data-tooltip-content="Delete" data-tooltip-place="top">
                            <img src="https://res.cloudinary.com/djdqpnyx4/image/upload/v1713192018/delete_h5san6.svg" alt="delete" className="delete_img edit_delete_im"  />
                        </button>
                        <Tooltip id="delete-tooltip" />
                    </div>
                    </div>

                </div>)
            }
        </div>
    )
}