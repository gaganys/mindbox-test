import type { TitleProps } from '../../types/types'
import styles from './Title.module.scss'

const Title = ({ text }: TitleProps) => {
	return <h1 className={styles.title}>{text}</h1>
}

export default Title
