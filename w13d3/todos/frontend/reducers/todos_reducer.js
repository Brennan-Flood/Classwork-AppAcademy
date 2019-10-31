import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  let newTodosState = {};

  switch (action.type) {
    case RECEIVE_TODOS: 
      let newTodosArr = action.todos;
      newTodosArr.forEach((todo, i) => {
        newTodosState[todo.id] = todo;
      });
      return newTodosState;
    case RECEIVE_TODO:
      let newTodo = action.todo;
      return Object.assign({}, state, {[newTodo.id]: newTodo});
    default: 
      return state;
  }
};

export default todosReducer;