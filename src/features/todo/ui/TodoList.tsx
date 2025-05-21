import type { Task } from '../../../shared/types/types'
import TaskList from '../../../shared/ui/TaskList/TaskList'

interface TodoListProps {
	tasks: Task[] | null | undefined
	toggleIsCompleted: (id: string) => void
	removeTask: (id: string) => void
}

const TodoList = ({ tasks, toggleIsCompleted, removeTask }: TodoListProps) => {
	return (
		<TaskList>
			{tasks?.map(task => (
				<TaskList.Task
					key={task.id}
					id={task.id}
					text={task.text}
					isCompleted={task.isCompleted}
					toggleIsCompleted={toggleIsCompleted}
					removeTask={removeTask}
				/>
			))}
		</TaskList>
	)
}

export default TodoList
