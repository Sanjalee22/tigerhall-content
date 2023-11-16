import { useQuery } from '@apollo/client';
import { Flex } from '@chakra-ui/react';
import GET_PODCASTS_QUERY from '../../queries/fetchPodcasts';
import ContentCard from '../ContentCard/ContentCard';

const SearchResult = ({ keyword }) => {
    const { data } = useQuery(GET_PODCASTS_QUERY, {
        variables: { keyword }
    })

    return (
        <Flex gap={4} flexDirection="column" marginTop={4}>
            {data?.contentCards?.edges?.map((edge, index) => (
                <ContentCard key={index} edge={edge} />
            ))}
        </Flex>)
}

export default SearchResult