/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./App.css";
import { Form, TodoList } from "./components/index.js";
function App() {
	useEffect(() => {
		getLocalTodos();
	}, []);
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);
	useEffect(() => {
		filteredTodosHandler();
		saveLocalTodos();
	}, [todos, filter]);
	const filteredTodosHandler = () => {
		switch (filter) {
			case "completed":
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case "uncompleted":
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};
	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};
	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos"));
			setTodos(todoLocal);
		}
	};
	return (
		<div className='App'>
			<span className='todo-name'>to-do list</span>
			<Form
				setFilter={setFilter}
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
			></Form>
			<TodoList
				filteredTodos={filteredTodos}
				todos={todos}
				setTodos={setTodos}
			></TodoList>
		</div>
	);
}

export default App;
