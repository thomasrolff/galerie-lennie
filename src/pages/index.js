import Head from "next/head";
import styled from "styled-components";
import { Layout } from "../components";

const Title = styled.h1`
    font-size: 108px;
    font-weight: 800;
    margin-top: 2rem;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        margin: 0;
        margin-top: 8rem;
        font-size: 24px;
    }
`;

const Home = () => (
    <>
        <Head>
            <title>Galerie Lennie</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <Wrapper>
                <h2>Welkom bij</h2>
                <Title>Galerie Lennie</Title>
            </Wrapper>
        </Layout>
    </>
);

export default Home;
