import Head from "next/head";
import Link from "next/link";
import { Layout } from "../../components";
import styled from "styled-components";
import { client, FETCH_APP_DATA } from './../../graphql';

const Title = styled.h1`
    padding-left: 1rem;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    padding: 1rem;
`;

const ArtworkCard = styled.div`
    height: 280px;
    width: 200px;
    text-align: center;
    margin: 0 0.5rem;

    img {
        max-height: 200px;
        max-width: 200px;
        object-fit: contain;
        box-shadow: 3px 5px 10px 5px rgba(0, 0, 0, 0.28);
        cursor: pointer;
    }

    h4 {
        margin: 0.5rem 0;
    }
`;

const Artists = ({ artists }) => {
    
    return (
        <>
            <Head>
                <title>Alle Kunstenaars</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Title>Alle Kunstenaars</Title>
                <Wrapper>
                    {artists.map(artist => {
                        return artist.parentId === null ? (
                            <ArtworkCard key={artist.id}>
                                <Link href={`/artists/${artist.slug}`}>
                                    <img src={artist.featuredImage.node.sourceUrl}/>
                                </Link>
                                <h4>{artist.title}</h4>
                            </ArtworkCard>
                        ) : null;
                    })}
                </Wrapper>
            </Layout>
        </>
    );
};

export async function getStaticProps() {
    const { data } = await client.query(FETCH_APP_DATA);

    return {
        props: {
            artists: data.artworks.nodes,
        },
        revalidate: 1,
    }
}

export default Artists;
