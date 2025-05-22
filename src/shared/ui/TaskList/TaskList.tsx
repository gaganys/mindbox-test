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
		<div
			className={styles.taskWrapper}
			onClick={() => toggleIsCompleted(id)}
			data-testid='task'
			data-completed={isCompleted}
		>
			<div className={styles.completed}>
				{isCompleted && (
					<Check
						size={20}
						color='#65BA74'
						role='img'
						aria-hidden='true'
						data-testid='check-icon'
					/>
				)}
			</div>
			<li className={isCompleted ? styles.completedTask : styles.task}>
				{text}
			</li>
			<Trash
				className={styles.remove}
				onClick={e => {
					e.stopPropagation()
					removeTask(id)
				}}
				data-testid='button-remove'
			/>
		</div>
	)
}

TaskList.Task = Task

export default TaskList
