import React from 'react';

interface Props {  
    classCardContainer: string,
    classTitle: string,
    classDescription: string,
    classAvatarContainer: string,
    classCommentSection: string,
    classPostSection: string,
    title: string; 
    description: string; 
    author: string; 
    timestamp: string;
};

const Card: React.FC<Props> = ({classCardContainer,
    classTitle, classDescription, classAvatarContainer, classCommentSection, classPostSection,
    title, description, author, timestamp}) => {
    return (
        <div className={classCardContainer}>
            <h2 className={classTitle}>{title}</h2>
            <p className={classDescription}>{description}</p>
            <div className={classPostSection}>
                <div className={classCommentSection}> 
                    <button className="mr-4">5 reactions</button> 
                    <button>Add Comment</button> 
                </div>
                <div className={classAvatarContainer}> 
                    <div>{author}</div> 
                    <div>{timestamp}</div> 
                </div>
            </div>
        </div>
    )
}

export default Card;