import type React from 'react'
import Input from '../../../shared/ui/Input/Input'

interface TodoInputProps {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onClick: () => void
}

const TodoInput = ({ value, onChange, onClick }: TodoInputProps) => {
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && value.trim()) {
			onClick()
		}
	}

	return (
		<Input
			placeholder='What needs to be done?'
			value={value}
			onChange={onChange}
			onClick={onClick}
			onKeyDown={handleKeyDown}
		/>
	)
}

export default TodoInput
