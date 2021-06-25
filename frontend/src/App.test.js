//import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from './App'

it('App renders correctly', () => {
	const app = renderer.create(<App />).toJSON()

	expect(app).toMatchSnapshot()
})
