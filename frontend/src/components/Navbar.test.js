import renderer from 'react-test-renderer'
import Navbar from './Navbar'

it('Navbar renders correctly', () => {
	const navbar = renderer.create(<Navbar />).toJSON()

	expect(navbar).toMatchSnapshot()
})
