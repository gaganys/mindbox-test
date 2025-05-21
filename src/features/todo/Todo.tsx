import Title from '../../shared/ui/Title/Title'
import styles from './Todo.module.scss'
import TodoInput from './ui/TodoInput'
import TodoList from './ui/TodoList'

const Todo = () => {
	return (
		<div className={styles.todo}>
			<Title text='todos' />
			<TodoInput />
			<TodoList />
		</div>
	)
}

export default Todo
