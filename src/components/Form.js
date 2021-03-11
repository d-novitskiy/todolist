import React from "react";
export function Form({ setFilter, inputText, setInputText, todos, setTodos }) {
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};
	const submitTodoHandler = (e) => {
		e.preventDefault();
		if (inputText === "") {
			alert("insert Todo");
		} else {
			setTodos([
				...todos,
				{ text: inputText, completed: false, id: Math.random() * 1000 },
			]);
			setInputText("");
		}
	};
	const filterHandler = (e) => {
		setFilter(e.target.value);
	};
	return (
		<form>
			<input
				value={inputText}
				onChange={inputTextHandler}
				type='text'
				className='todo-input'
				required
			/>
			<button
				onClick={submitTodoHandler}
				onSubmit={submitTodoHandler}
				className='todo-button'
				type='submit'
			>
				<i className='fas fa-plus-square'></i>
			</button>
			<div className='select'>
				<select onChange={filterHandler} name='todos' className='filter-todo'>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='uncompleted'>Uncompleted</option>
				</select>
			</div>
		</form>
	);
}
