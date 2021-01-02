import Head from 'next/head';
import { Layout } from '../components'; 
import styled from 'styled-components'; 

const Title = styled.h1`
    font-size: 92px;
    font-weight: 800;
    margin-top: 10rem;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Contact = () => (
  <>
      <Head>
          <title>Contact</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <Wrapper>
             <Title>Contact.</Title>
          </Wrapper>
      </Layout>
  </>
)

export default Contact;  