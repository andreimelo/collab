import React from 'react';

interface Props { };

const Footer: React.FC<Props> = () => {
    return (
        // temporary - need refactor
        <footer className="max-w-8xl mx-auto p-4 sm:px-6 lg:px-8">
            This is footer
        </footer>
    )
}

export default Footer;