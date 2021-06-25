import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ApplicationStats from './components/ApplicationStats'
import StatCard from './components/StatCard'
import CampaignStats from './components/CampaignStats'
import Tracker from './components/Tracker'
import Position from './components/Position'
import ApplicationRecieved from './components/ApplicationRecieved'

function App() {
	return (
		<main className='flex bg-gray-900 text-gray-200 max-h-full lg:max-h-screen divide-x divide-gray-700'>
			<Navbar />
			<div className='sm:flex sm:flex-col lg:grid lg:grid-rows-6 lg:grid-cols-5 w-screen'>
				<div className='col-span-full'>
					<Header />
				</div>
				<div className='rounded-md mx-4'>
					<StatCard
						title='Total Applications'
						number='7956'
						percent='+3.59'
						progress='70'
						color='text-purple-500'
						bgcolor=''
					/>
				</div>
				<div className='rounded-md mx-4'>
					<StatCard
						title='Shortlisted Candidates'
						number='4658'
						percent='+06'
						progress='60'
						color='text-gray-200'
						bgcolor='bg-indigo-500'
					/>
				</div>
				<div className='rounded-md mx-4'>
					<StatCard
						title='Total Applications'
						number='1501'
						percent='-04'
						progress='40'
						color='text-red-500'
						bgcolor=''
					/>
				</div>
				<div className='rounded-md ml-14 mr-4 mb-2 col-start-4 col-span-2 row-span-5'>
					<Tracker />
				</div>
				<div className='rounded-md m-4 col-span-2 row-span-2'>
					<ApplicationRecieved />
				</div>
				<div className='rounded-md m-4 row-span-2'>
					<ApplicationStats />
				</div>
				<div className='rounded-md mx-4 mb-2 col-span-2 row-span-2'>
					<CampaignStats />
				</div>
				<div className='rounded-md mx-4 mb-2 row-span-2'>
					<Position />
				</div>
			</div>
		</main>
	)
}

export default App
