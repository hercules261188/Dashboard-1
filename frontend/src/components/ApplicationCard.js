const ApplicationCard = ({ name, job }) => {
	return (
		<div className='flex p-6 items-center justify-between'>
			<div className='flex items-center'>
				<div className='mr-4 text-gray-300'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='32'
						height='32'
						fill='currentColor'
						viewBox='0 0 16 16'
					>
						<path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
						<path
							fill-rule='evenodd'
							d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
						/>
					</svg>
				</div>
				<div className='flex flex-col'>
					<div className='font-bold text-xl'>{name}</div>
					<div className='text-sm'>
						Applied for <span className='text-indigo-500'>{job}</span>
					</div>
				</div>
			</div>
			<div className='flex'>
				<button className='flex mr-4 w-8 h-8 rounded-full bg-gray-500 items-center justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						fill='currentColor'
						viewBox='0 0 16 16'
					>
						<path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z' />
					</svg>
				</button>
				<button className='flex mr-4 w-8 h-8 rounded-full bg-gray-500 items-center justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						class='bi bi-telephone-fill'
						viewBox='0 0 16 16'
					>
						<path
							fill-rule='evenodd'
							d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default ApplicationCard
