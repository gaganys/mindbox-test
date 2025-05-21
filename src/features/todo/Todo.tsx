import React from 'react'
import type { Task } from '../../shared/types/types'
import Title from '../../shared/ui/Title/Title'
import styles from './Todo.module.scss'
import TodoInput from './ui/TodoInput'
import TodoList from './ui/TodoList'

const Todo = () => {
	const [value, setValue] = React.useState<string>('')
	const [tasks, setTasks] = React.useState<Task[] | null>()

	const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		console.log(value)
	}

	const addTask = () => {
		const newTask = {
			id: Date.now().toString(),
			text: value,
			isCompleted: false,
		}

		setTasks(prev => (prev ? [...prev, newTask] : [newTask]))
		setValue('')
	}

	const toggleIsCompleted = (id: string) => {
		setTasks(prev =>
			prev?.map(task =>
				task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
			)
		)
	}

	const removeTask = (id: string) => {
		setTasks(prev => prev?.filter(task => task.id !== id))
	}

	return (
		<main className={styles.main}>
			<Title text='todos' />

			<div className={styles.todo}>
				<TodoInput
					value={value}
					onChange={handleChangeValue}
					onClick={addTask}
				/>
				<TodoList
					tasks={tasks}
					toggleIsCompleted={toggleIsCompleted}
					removeTask={removeTask}
				/>
			</div>
		</main>
	)
}

export default Todo
