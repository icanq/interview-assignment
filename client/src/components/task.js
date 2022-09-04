import "../index.css"
import { FaTrashAlt } from "react-icons/fa";
const Task = ({task,onDelete,priority}) => {
    return (
        <div>
            
            <div className="task">
                    <div className="row">
                        <div className="col-sm-8 text-left">
                            <div className="d-flex flex-column">
                                <span >Task Name: {task.name}</span> 
                                <span >Priority : <span className={priority.class}>{priority.label}</span> </span>
                                <span> Duration : {task.duration} hour</span>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <span className="text-danger cursor" onClick={() => onDelete(task.id)}><FaTrashAlt  style={{color: 'red'}} /> </span>
                        </div>
                        
                    </div>
            </div>
            <hr />
        </div>
        
    )
}

export default Task