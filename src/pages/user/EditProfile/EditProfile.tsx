import React from 'react';
import LayoutProvider from '@library/layouts/LayoutProvider';
import Navigation from '@library/components/Navigation';
import Footer from '@library/components/Footer';

interface Props {}

const EditProfile: React.FC = () => {
	// refactor
	return (
		<LayoutProvider
			classContainer='font-family-helveltica bg-gray-100 max-w-8xl mx-auto p-4 sm:px-6 lg:px-8'
			footerElement={<Footer />}
			navigationElement={<Navigation />}
		>
			<div className='w-fit m-auto'>
				<label className='text-xl font-bold'>
					Lets get some information to make your profile stand out.
				</label>

				<div className='text-xs leading-7'>* = required field</div>

				<form>
					<div className='flex flex-col w-fit my-2'>
						<label className='text-sm'>
							Give us an idea of where you are at in your career
						</label>
						<input className='my-2 border p-2 h-10 rounded' />
						<label className='text-sm'>Company or Leave it blank</label>
						<input className='my-2 border p-2 h-10 rounded' />
						<label className='text-sm'>
							Company Website or Personal Website
						</label>
						<input className='my-2 border p-2 h-10 rounded' />

						<label className='text-sm'>City & State (eg. Boston, MA)</label>
						<input className='my-2 border p-2 h-10 rounded' />

						<label className='text-sm'>Skills</label>
						<input className='my-2 border p-2 h-10 rounded' />

						<label className='text-sm'>Tell us about yourself</label>
						<textarea className='my-2 border p-2 h-10 rounded' />

						<div className='flex flex-col'>
							<div>
								<label className='mx-3'>logo</label>
								<input className='my-2 border p-2 h-10 rounded' />
							</div>
							<div>
								<label className='mx-3'>logo</label>
								<input className='my-2 border p-2 h-10 rounded' />
							</div>
							<div>
								<label className='mx-3'>logo</label>
								<input className='my-2 border p-2 h-10 rounded' />
							</div>
							<div>
								<label className='mx-3'>logo</label>
								<input className='my-2 border p-2 h-10 rounded' />
							</div>
						</div>
					</div>

					<button className='border my-3 px-3 py-2 rounded bg-blue-600 text-white'>
						Submit
					</button>
				</form>
			</div>
		</LayoutProvider>
	);
};

export default EditProfile;
