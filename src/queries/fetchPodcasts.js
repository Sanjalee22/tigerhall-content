import { gql } from '@apollo/client';

const GET_PODCASTS_QUERY = gql`
  query GetPodcasts($keyword: String!) {
    contentCards(filter: {keywords: $keyword, types: [PODCAST]}) {
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