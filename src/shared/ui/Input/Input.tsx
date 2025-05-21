import { ChevronDown, Plus } from 'lucide-react'
import type { InputProps } from '../../types/types'
import styles from './Input.module.scss'

const Input = ({ placeholder, value, onChange, onClick }: InputProps) => {
	return (
		<div className={styles.wrapper}>
			<ChevronDown />
			<input
				className={styles.input}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			{value && <Plus className={styles.add} onClick={onClick} />}
		</div>
	)
}

export default Input
