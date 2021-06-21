import { Line } from 'react-chartjs-2'

const ApplicationRecieved = () => {
	const data = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
		datasets: [
			{
				label: 'First dataset',
				data: [25, 50, 40, 45, 79, 65],
				fill: true,
				backgroundColor: 'rgba(108,50,58,0.4)',
				borderColor: 'rgba(255,82,97)',
			},
			{
				label: 'Second dataset',
				data: [33, 25, 35, 51, 54, 76],
				fill: false,
				borderColor: 'rgb(92,98,109)',
			},
		],
	}

	return (
		<div className='flex flex-col w-full h-full p-4 border border-gray-700 rounded-md'>
			<div className='flex justify-between items-center'>
				<div className='font-bold'>Applications Recieved</div>
				<div className='flex space-x-6 items-center'>
					<div>
						<a href='/'>This Year</a>
					</div>
					<div>
						<a href='/'>This Week</a>
					</div>
					<div>
						<a href='/'>Today</a>
					</div>
					<div className='flex items-center'>
						<button>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								fill='currentColor'
								className='mr-2'
								viewBox='0 0 16 16'
							>
								<path d='M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z' />
							</svg>
						</button>
						<a href='/'>Download Report</a>
					</div>
					<div className='flex items-center'>
						<button>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								fill='currentColor'
								viewBox='0 0 16 16'
							>
								<path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div>
				<Line
					data={data}
					options={{
						responsive: true,
						maintainAspectRatio: false,
					}}
					height={250}
				/>
			</div>
		</div>
	)
}

export default ApplicationRecieved
