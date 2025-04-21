import React from 'react';
import LayoutProvider from '@library/layouts/LayoutProvider';
import Navigation from '@library/components/Navigation';
import Footer from '@library/components/Footer';
import { DummyAvatar, Fb } from '@assets';
// import { Link } from 'react-router';

interface Props {}

const ProfileDetail: React.FC = () => {
	return (
		<LayoutProvider
			classContainer='font-family-helveltica bg-gray-100 max-w-8xl mx-auto p-4 sm:px-6 lg:px-8'
			footerElement={<Footer />}
			navigationElement={<Navigation />}
		>
			<div className='bg-white p-10 m-10'>
				<div className='flex flex-col items-center justify-center text-center'>
					<img
						src={DummyAvatar}
						className='w-fit mx-3 rounded-full'
						alt='Vite logo'
					/>
					<div className='m-5'>
						<div className='font-bold text-3xl'> Andrei Melo</div>
						<div className='mt-2'>Instructor at Udemy</div>
						<div className='mt-2'>Boston, MA</div>
						<div className='flex justify-center mt-4'>
							<img
								src={Fb}
								className='place-self-center w-26 ml-2'
								alt='Facebook logo'
							/>
							<img
								src={Fb}
								className='place-self-center w-26 ml-2'
								alt='Facebook logo'
							/>{' '}
							<img
								src={Fb}
								className='place-self-center w-26 ml-2'
								alt='Facebook logo'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-row'>
				<div className='w-full bg-white p-10 ml-10 mr-2'>
					<div className='text-xl font-bold'>Bio</div>
					<div className='my-2'>
						I am a frontend developer and instructor at Udemy
					</div>
				</div>
				<div className='w-full bg-white p-10 mr-10 ml-2'>
					<div className='text-xl font-bold'>Skills</div>
					<div className='my-2 flex flex-wrap'>
						<div className='flex-1'>HTML</div>
						<div className='flex-1'>CSS</div>
						<div className='flex-1'>JAVASCRIPT</div>
						<div className='flex-1'>REACT</div>
					</div>
				</div>
			</div>
			<div className='bg-white p-10 m-10'>
				<div className='flex-1 text-xl font-bold'>Experience</div>
				{/*  */}
				<div>
					<div className='flex flex-row my-4'>
						<div className='flex-1 text-base font-semibold'>
							Lorem Ipsum Technology Company
						</div>
						<div className='flex-1 text-sm text-end'>
							10/10/2025 - 10/11/2025
						</div>
					</div>
					<ul className='list-disc text-sm leading-6'>
						<li>
							Developed and maintained scalable React components for a
							customer dashboard used by 50k+ users.{' '}
						</li>
						<li>
							Collaborated with designers and backend engineers to implement
							responsive UIs with Tailwind CSS and RESTful APIs.
						</li>
						<li>
							Improved performance by 35% by optimizing component re-renders
							and lazy-loading assets.
						</li>
						<li>Migrated legacy jQuery code to modern React architecture.</li>
						<li>
							Wrote unit and integration tests using Jest and React Testing
							Library to ensure 95% test coverage.
						</li>
					</ul>
				</div>
			</div>

			<div className='bg-white p-10 m-10'>
				<div className='text-xl font-bold'>Education</div>
				<div className='flex flex-row my-4'>
					<div className='flex-1 text-base'>
						<div className='font-semibold'>
							Lorem Ipsum Technology Company
						</div>
						<div>Bachelor of Science in Information Technology</div>
						<div>Description: [Optional]</div>
					</div>
					<div className='flex-1 text-sm text-end'>10/10/2025 - 10/11/2025</div>
				</div>
			</div>
			<div className='bg-white p-10 m-10'>
				<div className='text-xl font-bold'>Github Repo</div>
				<div className='flex flex-row my-4'>Random</div>
			</div>
		</LayoutProvider>
	);
};

export default ProfileDetail;
