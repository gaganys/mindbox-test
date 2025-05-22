import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Todo from '../features/todo/Todo'

describe('Todo (Critical Functionality Only)', () => {
	// 1. Тест добавления задачи
	it('adds new task', async () => {
		render(<Todo />)
		const user = userEvent.setup()

		// Ввод и добавление
		const input = screen.getByPlaceholderText('What needs to be done?')
		await user.type(input, 'Buy milk')
		await user.keyboard('{enter}')

		// Ожидаем появления задачи
		expect(await screen.findByText('Buy milk')).toBeInTheDocument()
	})

	// 2. Тест переключения статуса
	it('toggles task completion', async () => {
		render(<Todo />)
		const user = userEvent.setup()

		// Добавляем задачу
		await user.type(
			screen.getByPlaceholderText('What needs to be done?'),
			'Walk dog{enter}'
		)

		const task = await screen.findByTestId('task')

		// Проверяем начальное состояние
		expect(screen.queryByTestId('check-icon')).not.toBeInTheDocument()

		await user.click(task)

		// Проверяем изменение состояния
		expect(await screen.findByTestId('check-icon')).toBeInTheDocument()

		// Кликаем еще раз для отмены выполнения
		await user.click(task)
		expect(screen.queryByTestId('check-icon')).not.toBeInTheDocument()
	})

	// 3. Тест удаления задачи
	it('removes task', async () => {
		render(<Todo />)
		const user = userEvent.setup()

		// Добавляем задачу
		const input = screen.getByPlaceholderText('What needs to be done?')
		await user.type(input, 'Clean room')
		await user.keyboard('{enter}')

		// Убедимся, что задача появилась
		await screen.findByText('Clean room')

		// Находим и кликаем кнопку удаления
		const deleteButton = await screen.findByTestId('button-remove')
		await user.click(deleteButton)

		// Проверяем исчезновение
		expect(screen.queryByText('Clean room')).not.toBeInTheDocument()
	})

	// 4. Тест очистки выполненных
	it('clears completed tasks', async () => {
		render(<Todo />)
		const user = userEvent.setup()

		// Добавляем две задачи
		await user.type(
			screen.getByPlaceholderText('What needs to be done?'),
			'Task 1{enter}Task 2{enter}'
		)

		// Помечаем первую как выполненную (кликаем по задаче)
		const tasks = await screen.findAllByTestId('task')
		await user.click(tasks[0])

		// Очищаем выполненные
		await user.click(screen.getByText('Clear completed'))

		// Проверяем результат
		expect(screen.queryByText('Task 1')).not.toBeInTheDocument()
		expect(await screen.findByText('Task 2')).toBeInTheDocument()
	})
})
