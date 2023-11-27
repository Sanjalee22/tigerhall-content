import React from 'react';
import ContentCard from '../ContentCard';
import { ContentListProps } from '../search.types';

const ContentList: React.FC<ContentListProps> = ({ items }) => {
    return (
        <>
            {items?.map((edge, index) => (
                <ContentCard key={index} edge={edge} />
            ))}
        </>
    )
}

export default ContentList