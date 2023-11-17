import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import GET_PODCASTS_QUERY from '../../queries/fetchPodcasts';// adjust the import path as needed
import ContentCard from '../ContentCard/ContentCard';
import { Flex, Spinner } from '@chakra-ui/react';

const SearchResult = ({ keyword }) => {
    const { loading, error, data, fetchMore } = useQuery(GET_PODCASTS_QUERY, {
        variables: { keyword: keyword, offset: 0 },
        notifyOnNetworkStatusChange: true,
    });

    const loadMorePodcasts = () => {
        fetchMore({
            variables: {
                offset: data?.contentCards?.edges?.length
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return Object.assign({}, prev, {
                    contentCards: {
                        ...fetchMoreResult?.contentCards,
                        edges: [...prev?.contentCards?.edges, ...fetchMoreResult?.contentCards?.edges]
                    }
                });
            }
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            loadMorePodcasts();
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [data]);

    return (
        <Flex gap={4} flexDirection="column" marginTop={4} >
            <ContentList items={data?.contentCards?.edges} />
            {<LoadingContent loading={loading} />}
        </Flex>
    );
};

const LoadingContent = ({ loading }) => {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            visibility={loading ? 'visible' : 'hidden'}
        >
            <Spinner
                thickness='4px'
                speed='0.7s'
                emptyColor='Grey.700'
                color='White.1000'
                size='xl'
            />
        </Flex>
    )
}

const ContentList = ({ items }) => {
    return (
        items?.map((edge, index) => (
            <ContentCard key={index} edge={edge} />
        ))
    )
}

export default SearchResult;



