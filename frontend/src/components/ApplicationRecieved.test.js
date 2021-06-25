import renderer from 'react-test-renderer'
import ApplicationRecieved from './ApplicationRecieved'

it('ApplicationRecieved renders correctly', () => {
	const applicationRecieved = renderer.create(<ApplicationRecieved />).toJSON()

	expect(applicationRecieved).toMatchSnapshot()
})
