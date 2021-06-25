import renderer from 'react-test-renderer'
import Tracker from './Tracker'

it('Tracker renders correctly', () => {
	const tracker = renderer.create(<Tracker />).toJSON()

	expect(tracker).toMatchSnapshot()
})
