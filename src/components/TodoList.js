import React from "react";
import { Todo } from "../components/index";
export function TodoList({ todos, setTodos }) {
	return (
		<div className='todo-container'>
			<ul className='todo-list'>
				{todos.map((todo) => (
					<Todo
						todo={todo}
						todos={todos}
						setTodos={setTodos}
						key={todo.id}
						text={todo.text}
					></Todo>
				))}
			</ul>
		</div>
	);
}
