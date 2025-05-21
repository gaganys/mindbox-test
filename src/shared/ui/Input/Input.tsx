import styles from './Input.module.scss'

interface InputProps {
	placeholder: string
	value: string
}

const Input = ({ placeholder, value }: InputProps) => {
	return (
		<input className={styles.input} value={value} placeholder={placeholder} />
	)
}

export default Input
