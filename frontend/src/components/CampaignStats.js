const CampaignStats = () => {
	return (
		<div className='w-full h-full flex flex-col p-4 border border-gray-700 rounded-md'>
			<div className='flex justify-between'>
				<div className='font-bold'>Referals and Campaign Stats</div>
				<div className='flex items-center'>
					<div className='font-bold text-xl text-red-500'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='30'
							fill='currentColor'
							class='mr-2'
							viewBox='0 0 16 16'
						>
							<path d='M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z' />
						</svg>
					</div>
					<div className='flex flex-col'>
						<div className='font-bold text-xl text-red-500'>
							40 Campaign sent in total
						</div>
						<div className='font-semibold'>4 Campaign sent in last month</div>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-4 mt-8'>
				<div className='flex flex-col font-bold items-center border-r border-gray-400'>
					<div className='mb-5'>User's Reached</div>
					<div className='flex items-center text-indigo-500'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='14'
							height='14'
							fill='currentColor'
							class='mr-2'
							viewBox='0 0 16 16'
						>
							<path d='M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z' />
						</svg>
						+3.59 %
					</div>
					<div className='text-xl'>7956</div>
				</div>
				<div className='flex flex-col font-bold items-center border-r border-gray-400'>
					<div className='mb-5'>Referals</div>
					<div className='flex items-center text-indigo-500'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='14'
							height='14'
							fill='currentColor'
							class='mr-2'
							viewBox='0 0 16 16'
						>
							<path d='M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z' />
						</svg>
						+9.01 %
					</div>
					<div className='text-xl'>0662</div>
				</div>
				<div className='flex flex-col font-bold items-center border-r border-gray-400'>
					<div className='mb-5'>Shares</div>
					<div className='flex items-center text-indigo-500'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='14'
							height='14'
							fill='currentColor'
							class='mr-2'
							viewBox='0 0 16 16'
						>
							<path d='M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z' />
						</svg>
						+39.18 %
					</div>
					<div className='text-xl'>1478</div>
				</div>
				<div className='flex flex-col font-bold items-center'>
					<div className='mb-5'>Applications</div>
					<div className='flex items-center text-indigo-500'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='14'
							height='14'
							fill='currentColor'
							class='mr-2'
							viewBox='0 0 16 16'
						>
							<path d='M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z' />
						</svg>
						+12.00 %
					</div>
					<div className='text-xl'>0564</div>
				</div>
			</div>
			<div className='flex justify-evenly mt-12 mx-8'>
				<div className='bg-indigo-500 hover:bg-indigo-700 rounded-md px-10 py-3 mr-4'>
					<button>Start a New Campaign now</button>
				</div>
				<div className='bg-red-500 hover:bg-red-700 rounded-md px-10 py-3'>
					<button>Pause all runnig Campaigns</button>
				</div>
			</div>
		</div>
	)
}

export default CampaignStats
