import { gql } from 'apollo-boost';

export const FETCH_APP_DATA = {
    query: gql`
        query FetchAppData {
            artworks {
                    nodes {
                    id
                    title
                    parentId
                    slug
                    content
                    featuredImage {
                        node {
                        sourceUrl
                        }
                    }
                }
            }
        }
    `
};
