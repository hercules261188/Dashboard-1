const Navbar = () => {
	return (
		<div className='flex flex-row h-full'>
			<nav className='bg-gray-900 w-20 h-screen justify-between flex flex-col'>
				<div className='mt-6 mb-10'>
					<a href='/'>
						<img
							src='/images/profile.jpg'
							alt='profile'
							className='rounded-full w-10 h-10 mb-3 mx-auto'
						/>
					</a>
					<div className='mt-8'>
						<ul>
							<li className='my-12 text-center'>
								<a href='/'>
									<span className='h-6 w-6 mx-auto text-gray-400 hover:text-indigo-500 transition-colors duration-200'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											fill='currentColor'
											className='m-auto'
											viewBox='0 0 16 16'
										>
											<path
												fillRule='evenodd'
												d='m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z'
											/>
											<path
												fillRule='evenodd'
												d='M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z'
											/>
										</svg>
									</span>
								</a>
							</li>
							<li className='my-12 text-center'>
								<a href='/'>
									<span className='h-6 w-6 mx-auto text-gray-400 hover:text-indigo-500  transition-colors duration-200'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											fill='currentColor'
											className='m-auto'
											viewBox='0 0 16 16'
										>
											<path d='M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z' />
										</svg>
									</span>
								</a>
							</li>
							<li className='my-12 text-center'>
								<a href='/'>
									<span className='h-6 w-6 mx-auto text-gray-400 hover:text-indigo-500  transition-colors duration-200'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											fill='currentColor'
											className='m-auto'
											viewBox='0 0 16 16'
										>
											<path d='M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z' />
											<path d='M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z' />
										</svg>
									</span>
								</a>
							</li>
							<li className='my-12 text-center'>
								<a href='/'>
									<span className='h-6 w-6 mx-auto text-gray-400 hover:text-indigo-500 transition-colors duration-200'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											fill='currentColor'
											className='m-auto'
											viewBox='0 0 16 16'
										>
											<path d='M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z' />
										</svg>
									</span>
								</a>
							</li>
							<li className='my-12 text-center'>
								<a href='/'>
									<span className='h-6 w-6 mx-auto text-gray-400 hover:text-indigo-500  transition-colors duration-200'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											fill='currentColor'
											className='m-auto'
											viewBox='0 0 16 16'
										>
											<path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z' />
										</svg>
									</span>
								</a>
							</li>
							<li className='my-12 text-center'>
								<a href='/'>
									<span className='h-6 w-6 mx-auto text-gray-400 hover:text-indigo-500  transition-colors duration-200'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											fill='currentColor'
											className='m-auto'
											viewBox='0 0 16 16'
										>
											<path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
											<path
												fillRule='evenodd'
												d='M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z'
											/>
											<path d='M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' />
										</svg>
									</span>
								</a>
							</li>
							<li className='my-12 text-center'>
								<a href='/'>
									<span className='h-6 w-6 mx-auto text-gray-400 hover:text-indigo-500  transition-colors duration-200'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											fill='currentColor'
											className='m-auto'
											viewBox='0 0 16 16'
										>
											<path d='M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z' />
										</svg>
									</span>
								</a>
							</li>
							<li className='my-12 text-center'>
								<a href='/'>
									<span className='h-6 w-6 mx-auto text-gray-400 hover:text-indigo-500   transition-colors duration-200'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											fill='currentColor'
											className='m-auto'
											viewBox='0 0 16 16'
										>
											<path
												fillRule='evenodd'
												d='M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z'
											/>
											<path
												fillRule='evenodd'
												d='M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z'
											/>
										</svg>
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='mb-4 text-gray-400 hover:text-indigo-500 '>
					<a href='/'>
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								fill='currentColor'
								className='m-auto'
								viewBox='0 0 16 16'
							>
								<path d='M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z' />
							</svg>
						</span>
					</a>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
