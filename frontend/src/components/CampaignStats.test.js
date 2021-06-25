import renderer from 'react-test-renderer'
import CampaignStats from './CampaignStats'

it('CampaignStats renders correctly', () => {
	const campaignStats = renderer.create(<CampaignStats />).toJSON()

	expect(campaignStats).toMatchSnapshot()
})
