import styles from './TaskList.module.scss'

interface TaskListProps {
	children: React.ReactNode
}

interface TaskProps {
	text: string
}

const TaskList = ({ children }: TaskListProps) => {
	return <ul className={styles.list}>{children}</ul>
}

const Task = ({ text }: TaskProps) => {
	return <li className={styles.task}>{text}</li>
}

TaskList.Task = Task

export default TaskList
