import React from 'react'
import type { Task } from '../../shared/types/types'
import Title from '../../shared/ui/Title/Title'
import styles from './Todo.module.scss'
import BottomMenu from './ui/BottomMenu'
import TodoInput from './ui/TodoInput'
import TodoList from './ui/TodoList'

const Todo = () => {
	const [value, setValue] = React.useState<string>('')
	const [tasks, setTasks] = React.useState<Task[] | null>()
	const [filter, setFilter] = React.useState<'All' | 'Active' | 'Completed'>(
		'All'
	)

	const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		console.log(value)
	}

	const filteredTasks = React.useMemo(() => {
		if (!tasks) return null
		switch (filter) {
			case 'Active':
				return tasks.filter(task => !task.isCompleted)
			case 'Completed':
				return tasks.filter(task => task.isCompleted)
			default:
				return tasks
		}
	}, [tasks, filter])

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

	const handleClearCompleted = () => {
		setTasks(prev => prev?.filter(task => !task.isCompleted))
	}

	const itemsLeft = tasks?.filter(task => !task.isCompleted).length || 0

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
					tasks={filteredTasks}
					toggleIsCompleted={toggleIsCompleted}
					removeTask={removeTask}
				/>
				<BottomMenu
					handleClearCompleted={handleClearCompleted}
					itemsLeft={itemsLeft}
					setFilter={setFilter}
					currentFilter={filter}
				/>
				<div className={styles.secondTab}></div>
				<div className={styles.thirdTab}></div>
			</div>
		</main>
	)
}

export default Todo
