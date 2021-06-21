import React from 'react'

const ApplicationStats = () => {
	return (
		<div className='w-full h-full p-4 overflow-hidden border border-gray-700 rounded-md'>
			<div className='w-full'>
				<p className='text-xl font-bold mb-4'>Total Applications</p>
				<div>
					<div className='flex font-semibold items-center justify-between text-indigo-300 text-sm'>
						<p>Application</p>
					</div>
					<div className='w-full h-2 bg-gray-200 rounded-full mb-4'>
						<div className='w-1/2 h-full text-center text-xs text-white bg-indigo-300 rounded-full'></div>
					</div>
				</div>
				<div>
					<div className='flex font-semibold items-center justify-between text-blue-500 text-sm'>
						<p>Short Listed</p>
					</div>
					<div className='w-full h-2 bg-gray-200 rounded-full mb-4'>
						<div className='w-3/4 h-full text-center text-xs text-white bg-blue-500 rounded-full'></div>
					</div>
				</div>
				<div>
					<div className='flex font-semibold items-center justify-between text-red-500 text-sm'>
						<p>Rejected</p>
					</div>
					<div className='w-full h-2 bg-gray-200 rounded-full mb-4'>
						<div className='w-1/3 h-full text-center text-xs text-white bg-red-500 rounded-full'></div>
					</div>
				</div>
				<div>
					<div className='flex font-semibold items-center justify-between text-pink-400 text-sm'>
						<p>On Hold</p>
					</div>
					<div className='w-full h-2 bg-gray-200 rounded-full mb-4'>
						<div className='w-1/4 h-full text-center text-xs text-white bg-pink-400 rounded-full'></div>
					</div>
				</div>
				<div>
					<div className='flex font-semibold items-center justify-between text-purple-400 text-sm'>
						<p>Finalised</p>
					</div>
					<div className='w-full h-2 bg-gray-200 rounded-full'>
						<div className='w-3/4 h-full text-center text-xs text-white bg-purple-400 rounded-full'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ApplicationStats
