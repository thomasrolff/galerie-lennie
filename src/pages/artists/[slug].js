import React, { useState, useEffect } from "react";
import Head from "next/head";
import ErrorPage from "next/error";
import Link from 'next/link';
import { Layout } from "../../components";
import styled from "styled-components";
import { client, FETCH_APP_DATA } from './../../graphql';


const Wrapper = styled.div`
    padding: 1rem;
`;

const ArtworkWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    height: 180px;
`;

const ArtworkCard = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    text-align: center;
    margin-right: 1rem;
    cursor: pointer;

    img {
        max-height: 140px;
        object-fit: contain;
    }

    p {
        font-size: 14px;
    }
`;

const Artist = ({ artist, artistArtworks }) => {
    if (!artist) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <>
            <Head>
                <title>Kunstenaar</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Wrapper>
                    {artist && <h1>{artist.title}</h1>}
                    <div dangerouslySetInnerHTML={{__html: artist.content}} />
                    <h3>Artworks:</h3>
                </Wrapper>
                <ArtworkWrapper>
                    {artistArtworks &&
                        artistArtworks.map(artwork => (
                            <ArtworkCard key={artwork.id}>
                                <Link href={`/artworks/${artwork.slug}`} key={artwork.id}>
                                    <img src={artwork.featuredImage.node.sourceUrl}/>
                                </Link>
                                <p>{artwork.title}</p>
                            </ArtworkCard>
                        ))}
                </ArtworkWrapper>
            </Layout>
        </>
    )};

export async function getStaticPaths() {
    const { data } = await client.query(FETCH_APP_DATA);
    const artists = await data.artworks.nodes.filter(artist => artist.parentId === null);
  
    const paths = artists.map((artist) => ({
        params: { slug: artist.slug },
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
        const artist = await data.artworks.nodes.filter(data => data.slug === slug)[0];
        const artistArtworks = await data.artworks.nodes.filter(data => data.parentId === artist.id);

        return {
            props: {
                artist,
                artistArtworks
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

export default Artist;
