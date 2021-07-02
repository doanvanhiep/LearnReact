import { connect } from "react-redux";
import TodoApp from "../component/TodoApp";
import { addTodo } from "../redux/todo";
import { addTodo1 } from "../redux/todo1";

const mapStateToProps = (state) => {
    return {
        todos: state.todo.items,
        todos1: state.todo1.items
    }
}

const mapActionToProps={
    addTodo,
    addTodo1
}


export default connect(mapStateToProps, mapActionToProps)(TodoApp);