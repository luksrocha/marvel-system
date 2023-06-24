import { ArrowUUpLeft } from '@phosphor-icons/react';
import Link from 'next/link';

const BackButton = () => {
    return (
        <Link href="/" style={{ display: 'flex', gap: '10px' }}>
            <ArrowUUpLeft size={32} />
            <h2 style={{ width: 'fitContent' }}>Back to home</h2>
        </Link>
    );
};

export default BackButton;
