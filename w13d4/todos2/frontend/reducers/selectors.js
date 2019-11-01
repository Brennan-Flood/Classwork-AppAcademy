export const allTodos = (state) => {
  let toDos = []; 
  Object.keys(state.todos).forEach(key=> {
    toDos.push(state.todos[key]);
  });
  return toDos; 
}