import React from 'react';
import LayoutProvider from '@library/layouts/LayoutProvider';
import Navigation from '@library/components/Navigation';
import Footer from '@library/components/Footer';

interface Props {}

const LandingDashboard: React.FC = () => {
	const data = [
		{ id: 1, name: 'John Doe', age: 28, city: 'New York' },
		{ id: 2, name: 'Jane Smith', age: 34, city: 'London' },
		{ id: 3, name: 'Sam Green', age: 45, city: 'Paris' },
		{ id: 4, name: 'Anna Brown', age: 22, city: 'Berlin' },
	];

	return (
		<LayoutProvider
			classContainer='font-family-helveltica bg-gray-100 max-w-8xl mx-auto p-4 sm:px-6 lg:px-8'
			footerElement={<Footer />}
			navigationElement={<Navigation />}
		>
			<div className='flex flex-col lg:flex-row'>
				<div className='lg:w-1/4 lg:mb-0'>
					<aside className='h-fit'>
						<ul className='text-gray-600 leading-relaxed'>
							<li className='flex'>
								<label>Edit Profile</label>
							</li>
							<li className='flex'>
								<label>Add Experience</label>
							</li>
							<li className='flex'>
								<label>Add Education</label>
							</li>
						</ul>
					</aside>
				</div>
				<main className='lg:w-2/4 mx-4'>
					<div className='text-xl font-semibold'>Experience</div>
					<table className='w-full table-auto bg-white shadow-md rounded-lg my-4'>
						<thead>
							<tr className='bg-gray-200'>
								<th className='px-4 py-2 border text-left'>ID</th>
								<th className='px-4 py-2 border text-left'>Name</th>
								<th className='px-4 py-2 border text-left'>Age</th>
								<th className='px-4 py-2 border text-left'>City</th>
							</tr>
						</thead>
						<tbody>
							{data.map((row) => (
								<tr key={row.id} className='border-b'>
									<td className='px-4 py-2'>{row.id}</td>
									<td className='px-4 py-2'>{row.name}</td>
									<td className='px-4 py-2'>{row.age}</td>
									<td className='px-4 py-2'>{row.city}</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className='text-xl font-semibold'>Education</div>
					<table className='w-full table-auto bg-white shadow-md rounded-lg my-4'>
						<thead>
							<tr className='bg-gray-200'>
								<th className='px-4 py-2 border text-left'>ID</th>
								<th className='px-4 py-2 border text-left'>Name</th>
								<th className='px-4 py-2 border text-left'>Age</th>
								<th className='px-4 py-2 border text-left'>City</th>
							</tr>
						</thead>
						<tbody>
							{data.map((row) => (
								<tr key={row.id} className='border-b'>
									<td className='px-4 py-2'>{row.id}</td>
									<td className='px-4 py-2'>{row.name}</td>
									<td className='px-4 py-2'>{row.age}</td>
									<td className='px-4 py-2'>{row.city}</td>
								</tr>
							))}
						</tbody>
					</table>
					<hr className='my-4' />
					<button className='border rounded bg-blue-600 text-white'>
						<div className='p-3'>Delete Account</div>
					</button>
				</main>
			</div>
		</LayoutProvider>
	);
};

export default LandingDashboard;
