import React, { useState } from "react";
import "./App.css";
import { Form, TodoList } from "./components/index.js";
function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className='App'>
			<span className='todo-name'>to-do list</span>
			<Form
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
			></Form>
			<TodoList todos={todos} setTodos={setTodos}></TodoList>
		</div>
	);
}

export default App;
