export interface Task {
	id: string
	text: string
	isCompleted: boolean
}

export interface Tab {
	id: number
	text: string
	filter: 'All' | 'Active' | 'Completed'
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

export interface BottomMenuProps {
	handleClearCompleted: () => void
	itemsLeft: number
	currentFilter: 'All' | 'Active' | 'Completed' // Текущий фильтр
	setFilter: (filter: 'All' | 'Active' | 'Completed') => void // Функция для изменения фильтра
}
