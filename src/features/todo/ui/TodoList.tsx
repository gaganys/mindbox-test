import TaskList from '../../../shared/ui/TaskList/TaskList'

const TodoList = () => {
	return (
		<TaskList>
			<TaskList.Task text='e' />
			<TaskList.Task text='f' />
			<TaskList.Task text='s' />
		</TaskList>
	)
}

export default TodoList
