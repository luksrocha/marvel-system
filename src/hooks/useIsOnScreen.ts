import { ForwardedRef, RefObject, useEffect, useMemo, useState } from 'react';

const useIsOnScreen = (
    element: RefObject<HTMLElement> | ForwardedRef<HTMLDivElement>
) => {
    const [isOnScreen, setIsOnScreen] = useState(false);

    useEffect(() => {
        const elementCopy = element as RefObject<HTMLElement>;

        if (!elementCopy?.current) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            setIsOnScreen(entry.isIntersecting);
        });

        if (elementCopy.current) {
            observer.observe(elementCopy.current);
        }

        return () => {
            if (elementCopy.current) {
                observer.disconnect();
            }
        };
    }, [element]);

    return isOnScreen;
};

export { useIsOnScreen };
