import ApplicationCard from './ApplicationCard'

const Tracker = () => {
	return (
		<div className='flex flex-col w-full h-full border border-gray-700 rounded-md'>
			<button className='absolute pt-10 text-gray-600 hover:text-gray-300 -ml-3'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='32'
					height='32'
					fill='currentColor'
					viewBox='0 0 16 16'
				>
					<path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z' />
				</svg>
			</button>
			<div className='text-xl font-bold text-center pt-9'>
				<div>Hello John Bayer</div>
				<div>You have 8 New Applications today</div>
			</div>
			<div className='w-full px-40 mt-12 min-w-max'>
				<img src='/images/tracker.png' alt='Tracker' />
			</div>
			<div className='bg-gray-800 h-full rounded-t-2xl'>
				<div className='px-10 pt-4 flex font-bold text-xl justify-between'>
					<div>New Applications</div>
					<button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							fill='currentColor'
							className='mr-2'
							viewBox='0 0 16 16'
						>
							<path
								fillRule='evenodd'
								d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
							/>
						</svg>
					</button>
				</div>
				<div>
					<ApplicationCard name='Rosie Metts' job='IOS Developer' />
				</div>
				<div>
					<ApplicationCard name='James Scott' job='Node.js Developer' />
				</div>
				<div>
					<ApplicationCard name='Danny Watson' job='IOS Developer' />
				</div>
				<div>
					<ApplicationCard name='Reha Scarlett' job='IOS Developer' />
				</div>
			</div>
		</div>
	)
}

export default Tracker
