import { gql } from '@apollo/client';

const GET_PODCASTS_QUERY = gql`
  query GetPodcasts($keyword: String!, $offset: Int!) {
    contentCards(filter: {keywords: $keyword, types: [PODCAST], offset: $offset, limit: 20}) {
      edges {
        ... on Podcast {
          name
          image {
            ...Image
          }
          categories {
            ...Category
          }
          experts {
            ...Expert
          }
        }
      }
    }
  }
  fragment Image on Image {
    uri
  }
  fragment Category on Category {
    name
  }
  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;

export default GET_PODCASTS_QUERY