import Head from "next/head";
import Link from "next/link";
import ErrorPage from "next/error";
import { Layout } from "../../components";
import styled from "styled-components";
import { colors } from "../../constants";
import { client, FETCH_APP_DATA } from './../../graphql';

const Wrapper = styled.div`
    padding: 1rem;

    h3 {
        cursor: pointer;
        color: ${colors.grey};
        margin-top: 0;

        &:hover {
            color: ${colors.greyDark};
        }
    }
`;

const ArtworkImage = styled.img`
    width: 60%;
    object-fit: contain;
`;

const ArtworkTitle = styled.h1`
    font-size: 30px;
    margin-bottom: .5rem;
`;

const Artwork = ({ artwork, artworkArtist }) => {
    if (!artwork) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <>
            <Head>
                <title>Kunstwerk</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Wrapper>
                    {artworkArtist && <ArtworkTitle>{artwork.title}</ArtworkTitle>}
                    <Link href={`/artists/${artworkArtist.slug}`}>
                        {artwork && <h3>{artworkArtist.title}</h3>}
                    </Link>
                    <ArtworkImage src={artwork.featuredImage.node.sourceUrl} />
                </Wrapper>
            </Layout>
        </>
    );
};

export async function getStaticPaths() {
    const { data } = await client.query(FETCH_APP_DATA);
    const artworks = await data.artworks.nodes.filter(artwork => artwork.parentId !== null);
  
    const paths = artworks.map((artwork) => ({
        params: { slug: artwork.slug },
    }))
  
    return { 
        paths, 
        fallback: true,
    }
  }

export async function getStaticProps(context) {
    try {
        const slug = context.params.slug;
        const { data } = await client.query(FETCH_APP_DATA);
        const artwork = await data.artworks.nodes.filter(data => data.slug === slug)[0];
        const artworkArtist = await data.artworks.nodes.filter(data => data.id === artwork.parentId)[0];

        return {
            props: {
                artwork,
                artworkArtist
            },
            revalidate: 1,
        };
    } catch {
        context.res.statusCode = 404;

        return {
            props: {},
        };
    }
}

export default Artwork;
