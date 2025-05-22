import { TABS } from '../../../shared/constants/constants'
import type { BottomMenuProps } from '../../../shared/types/types'
import styles from './BottomMenu.module.scss'

const BottomMenu = ({
	handleClearCompleted,
	itemsLeft,
	currentFilter,
	setFilter,
}: BottomMenuProps) => {
	return (
		<div className={styles.menu}>
			<div>{itemsLeft} items left</div>
			<ul className={styles.tabs}>
				{TABS.map(tab => (
					<li
						key={tab.id}
						className={
							currentFilter === tab.filter ? styles.activeTab : styles.tab
						}
						onClick={() => setFilter(tab.filter)}
					>
						{tab.text}
					</li>
				))}
			</ul>
			<div onClick={handleClearCompleted}>Clear completed</div>
		</div>
	)
}

export default BottomMenu
