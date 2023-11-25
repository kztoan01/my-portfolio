import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
type Props = {
    children: React.ReactNode;
  };
function ScrollToTop(props : Props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>{props.children}</>
    );
};
export default ScrollToTop;