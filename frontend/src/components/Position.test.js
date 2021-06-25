import renderer from 'react-test-renderer'
import Position from './Position'

it('Position renders correctly', () => {
	const position = renderer.create(<Position />).toJSON()

	expect(position).toMatchSnapshot()
})
