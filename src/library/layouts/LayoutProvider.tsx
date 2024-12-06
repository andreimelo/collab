import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	navigationElement: ReactNode;
	footerElement: ReactNode;
}

const LayoutProvider: React.FC<Props> = ({
	navigationElement,
	children,
	footerElement,
}) => {
	return (
		<div>
			{/* Navigation */}
			{navigationElement}
			{/*  Content*/}
			{children}
			{/* Footer */}
			{footerElement}
		</div>
	);
};

export default LayoutProvider;
