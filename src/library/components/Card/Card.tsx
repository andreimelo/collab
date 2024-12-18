import React from 'react';
import { DummyAvatar, CommentIcon } from '@assets';

interface Props {
	classCardContainer: string;
	classTitle: string;
	classDescription: string;
	classAvatarContainer: string;
	classCommentSection: string;
	classPostSection: string;
	title: string;
	description: string;
	author: string;
	timestamp: string;
}

const Card: React.FC<Props> = ({
	classCardContainer,
	classTitle,
	classDescription,
	classAvatarContainer,
	classCommentSection,
	classPostSection,
	title,
	description,
	author,
	timestamp,
}) => {
	return (
		<div className={classCardContainer}>
			<h2 className={classTitle}>{title}</h2>
			<p className={classDescription}>{description}</p>
			<div className={classPostSection}>
				<div className={classCommentSection}>
					<button className='mr-4'>5 reactions</button>
					<button className='flex mx-3 place-self-center'>
						<img
							src={CommentIcon}
							className='w-5 mx-2 rounded-full'
							alt='Comment Icon'
						/>
						Add Comment
					</button>
				</div>
				<div className={classAvatarContainer}>
					<div className='mt-4'>
						<div>{author}</div>
						<div>{timestamp}</div>
					</div>
					<div>
						<img
							src={DummyAvatar}
							className='w-14  mx-3 rounded-full'
							alt='Vite logo'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
