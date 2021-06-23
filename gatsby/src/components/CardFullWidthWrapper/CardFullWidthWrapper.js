import React from 'react';
import CardFullWidth from 'src/components/CardFullWidth/CardFullWidth';
import { CardFullWidthWrapperStyles } from './CardFullWidthWrapper.styles';

const CardFullWidthWrapper = ({ data }) => (
    <CardFullWidthWrapperStyles>
        {data.allSanityBlogPosts.nodes.map((item) => {
            const { name, lead, image } = item;
            return <CardFullWidth name={name} lead={lead} image={image.asset.gatsbyImageData} />;
        })}
    </CardFullWidthWrapperStyles>
);

export default CardFullWidthWrapper;
