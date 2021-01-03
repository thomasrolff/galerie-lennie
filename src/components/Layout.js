import { Navigation } from './Navigation';
import { Footer } from './Footer';

export const Layout = props => (
    <>
        <Navigation />
        {props.children}
        <Footer />
        {/* Add a footer for example */}
    </>
);
