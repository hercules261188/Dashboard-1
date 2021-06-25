import renderer from 'react-test-renderer'
import ApplicationCard from './ApplicationCard'

it('ApplicationCard renders correctly', () => {
	const applicationCard = renderer.create(<ApplicationCard />).toJSON()

	expect(applicationCard).toMatchSnapshot()
})
