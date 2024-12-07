import React, { ReactNode } from 'react';

interface Props {
	classLayout: string,
	classContainer: string,
	children: ReactNode;
	navigationElement: ReactNode;
	footerElement: ReactNode;
}

const LayoutProvider: React.FC<Props> = ({
	classLayout,
	classContainer,
	navigationElement,
	children,
	footerElement,
}) => {
	return (
		<div className={classLayout}>
			{/* Navigation */}
			{navigationElement}
			<div className={classContainer}>
			{/*  Content*/}
			{children}
			</div>
			{/* Footer */}
			{footerElement}
		</div>
	);
};


export default LayoutProvider;
