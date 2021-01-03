import { GlobalStyle } from '../GlobalStyle';

const App = ({ Component, pageProps }) => (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
);

export default App;
