import { render, screen } from '@testing-library/react'
import App from '../src/App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
	it('renders headline', () => {
		render(<App title='Vitest' />)

		screen.debug()

		// check if App components renders headline
	})
	it('renders App component', () => {
		render(<App />)
		expect(screen.getByText('Top')).toBeInTheDocument()
	})
})
