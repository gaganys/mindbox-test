export interface Task {
	id: string
	text: string
	isCompleted: boolean
}

export interface TitleProps {
	text: string
}

export interface InputProps {
	placeholder: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onClick: () => void
}

export interface TaskListProps {
	children: React.ReactNode
}

export interface TaskProps {
	id: string
	text: string
	isCompleted: boolean
	toggleIsCompleted: (id: string) => void
	removeTask: (id: string) => void
}
