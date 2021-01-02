import { GlobalStyle } from "../GlobalStyle";

const App = ({ Component, pageProps }) => (
    <>
        <Component {...pageProps} />
        <GlobalStyle />
    </>
);

export default App;
