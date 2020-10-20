
import React from "react";

function App(props) {
  return (
    <div className="todoapp stack-large">
    
      <h1>My Todo App</h1>
    
      <form>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          placeholder ="type a new todo"
        />
        </form>
        <div className="button">
      <button type="submit" className="btn btn__primary btn__lg">
        Add Todo
      </button>
      </div>
      <hr></hr>
      <h2 id="list-heading">Todos</h2>
      <ul
        //role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" />
            <label className="todo-label" htmlFor="todo-0">
              Learn React
            </label>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Be Awesome!
            </label>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Drink water!
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default App;