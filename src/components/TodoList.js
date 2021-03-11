import React from "react";
import { Todo } from "../components/index";
export function TodoList({ filteredTodos, todos, setTodos }) {
	return (
		<div className='todo-container'>
			<ul className='todo-list'>
				{filteredTodos.map((todo) => (
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
