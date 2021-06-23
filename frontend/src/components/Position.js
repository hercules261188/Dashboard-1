const Position = () => {
	return (
		<div className='flex flex-col w-full h-full p-4 border border-gray-700 rounded-md'>
			<div className='flex justify-between'>
				<div className='float-bold'>Open Positions by Department</div>
				<div>
					<button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							viewBox='0 0 16 16'
						>
							<path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
						</svg>
					</button>
				</div>
			</div>
			<div className='pt-2 px-4'>
				<img src='/images/doughnut.png' alt='Chart' />
			</div>
		</div>
	)
}

export default Position
