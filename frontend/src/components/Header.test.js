import renderer from 'react-test-renderer'
import Header from './Header'

it('Header renders correctly', () => {
	const header = renderer.create(<Header />).toJSON()

	expect(header).toMatchSnapshot()
})
