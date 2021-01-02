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

const About = () => (
  <>
      <Head>
          <title>Over ons</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <Wrapper>
             <Title>Wie zijn wij?</Title>
          </Wrapper>
          
      </Layout>
  </>
)

export default About;  