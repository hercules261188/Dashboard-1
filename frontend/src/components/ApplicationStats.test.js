import renderer from 'react-test-renderer'
import ApplicationStats from './ApplicationStats'

it('ApplicationStats renders correctly', () => {
	const applicationStats = renderer.create(<ApplicationStats />).toJSON()

	expect(applicationStats).toMatchSnapshot()
})
