import { Check, Trash } from 'lucide-react'
import type { TaskListProps, TaskProps } from '../../types/types'
import styles from './TaskList.module.scss'

const TaskList = ({ children }: TaskListProps) => {
	return <ul className={styles.list}>{children}</ul>
}

const Task = ({
	id,
	text,
	isCompleted,
	toggleIsCompleted,
	removeTask,
}: TaskProps) => {
	return (
		<div className={styles.taskWrapper}>
			<div className={styles.completed} onClick={() => toggleIsCompleted(id)}>
				{isCompleted && <Check size={20} color='#65BA74' />}
			</div>
			<li className={isCompleted ? styles.completedTask : styles.task}>
				{text}
			</li>
			<Trash className={styles.remove} onClick={() => removeTask(id)} />
		</div>
	)
}

TaskList.Task = Task

export default TaskList
