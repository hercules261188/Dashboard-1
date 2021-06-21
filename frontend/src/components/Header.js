const Header = () => {
	return (
		<header className='flex justify-between'>
			<div className='ml-4 flex flex-col'>
				<div className='mt-6 font-bold text-2xl'>Dashboard</div>
				<div className='mt-2 flex-grow font-bold text-lg'>
					Monday,
					<span className='text-indigo-500'> 20 Jun 2021</span>
				</div>
			</div>
			<div className='mt-2 mr-6'>
				<div className='flex items-center justify-end'>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							fill='currentColor'
							className='mr-6'
							viewBox='0 0 16 16'
						>
							<path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z' />
						</svg>
					</div>
					<div className='font-blod text-lg mr-6'>John Bayer</div>
					<div>
						<a href='/'>
							<img
								src='/images/profile.jpg'
								alt='profile'
								className='rounded-full w-8 h-8 mr-2'
							/>
						</a>
					</div>
					<div>
						<a href='/'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='10'
								height='10'
								fill='currentColor'
								viewBox='0 0 16 16'
							>
								<path
									fillRule='evenodd'
									d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
								/>
							</svg>
						</a>
					</div>
				</div>
				<div className='mt-4 mr-6 flex items-center'>
					<div className='mr-6'>
						<button
							type='button'
							className='py-2 px-4 flex justify-center items-center  bg-indigo-500 hover:bg-indigo-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold rounded-md '
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								className='mr-4'
								viewBox='0 0 16 16'
							>
								<path d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' />
							</svg>
							Add
						</button>
					</div>
					<div className='mr-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							fill='currentColor'
							className='text-gray-400'
							viewBox='0 0 16 16'
						>
							<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
						</svg>
					</div>
					<div>
						<input
							type='text'
							id='rounded-search'
							className='py-2 px-4 rounded-sm border-transparent bg-transparent text-gray-300 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-gray-700'
							placeholder='Search for Application here'
						/>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
