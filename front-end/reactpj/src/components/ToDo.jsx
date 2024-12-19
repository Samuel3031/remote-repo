import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import EditForm from "./EditForm";


function ToDo({ todo, deleteTodo, toggleCompleted, toggleIsEditing ,editTodo}) {
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo} />
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          toggleCompleted(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <FaEdit
          onClick={() => {
            toggleIsEditing(todo.id)
          }}
          style={{ cursor: "pointer" }}
        />
        <MdDeleteSweep
          onClick={() => {
            deleteTodo(todo.id);
          }}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
}
export default ToDo;
