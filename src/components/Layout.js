import { Navbar } from './Navbar';

export const Layout = (props) => (
    <>
        <Navbar />
        {props.children}
        
        {/* Add a footer for example */}
    </>
);