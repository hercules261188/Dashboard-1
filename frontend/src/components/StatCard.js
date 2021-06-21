const StatCard = ({ title, number, percent, progress, color, bgcolor }) => {
	return (
		<div
			className={`flex font-bold p-4 h-full w-full justify-between border border-gray-700 rounded-md ${bgcolor}`}
		>
			<div className='flex flex-col space-y-6'>
				<div>{title}</div>
				<div>{number}</div>
				<div className={`flex items-center ${color}`}>
					<span>
						{percent[0] === '+' && (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								className='mr-2'
								viewBox='0 0 16 16'
							>
								<path d='M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z' />
							</svg>
						)}
						{percent[0] === '-' && (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								className='mr-2'
								viewBox='0 0 16 16'
							>
								<path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768L5.904 5.197z' />
							</svg>
						)}
					</span>
					{percent}%
				</div>
			</div>
			<div className='flex justify-center items-center'>
				{progress === '70' && <img src='/images/pr70.png' alt='70%' />}
				{progress === '60' && <img src='/images/pr60.png' alt='60%' />}
				{progress === '40' && <img src='/images/pr40.png' alt='40%' />}
			</div>
			<div className='flex flex-col'>
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
		</div>
	)
}

export default StatCard
