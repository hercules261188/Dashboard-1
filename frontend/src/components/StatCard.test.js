import renderer from 'react-test-renderer'
import StatCard from './StatCard'

it('StatCard renders correctly', () => {
	const statCard = renderer.create(<StatCard />).toJSON()

	expect(statCard).toMatchSnapshot()
})
