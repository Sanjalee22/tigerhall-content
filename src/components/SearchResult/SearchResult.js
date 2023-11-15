import { useQuery } from '@apollo/client';
import GET_PODCASTS_QUERY from '../../queries/fetchPodcasts';

const SearchResult = ({keyword}) => {
    const { data } = useQuery(GET_PODCASTS_QUERY, {
        variables: { keyword },
        skip: !keyword,
      })


    return <div> {data?.contentCards?.edges?.map((edge, index) => (
        <div key={index}>
          <h2>{edge?.name}</h2>
        </div>
      ))}</div>
}

export default SearchResult