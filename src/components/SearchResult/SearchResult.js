import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import ContentCard from '../ContentCard/ContentCard';
import { Flex, Spinner } from '@chakra-ui/react';
import GET_PODCASTS_QUERY from '../../queries/fetchPodcasts';
import EmptyState from '../UtilityComponents/EmptyState';
import ErrorState from '../UtilityComponents/ErrorState';

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
            loadMorePodcasts(); //this will only be called when scroll reaches at the bottom.
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [data]);

    return (
        <Flex gap={4} flexDirection="column" marginTop={4} >
            {
                data?.contentCards?.edges?.length === 0
                    ?
                       <EmptyState messageText="No videos found for the entered keyword."/>
                    : error ?
                        <ErrorState errorText="An error occured. Please reload."/>
                    :
                        <ContentList items={data?.contentCards?.edges} />
            }
            <LoadingContent loading={loading} />

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
                emptyColor='#00000014'
                color='Orange.600'
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



