import React from 'react';
import CardFullWidth from 'src/components/CardFullWidth/CardFullWidth';
import { CardFullWidthWrapperStyles } from './CardFullWidthWrapper.styles';

const CardFullWidthWrapper = ({ data }) => (
    <CardFullWidthWrapperStyles>
        {data.allSanityBlogPosts.nodes.map((item) => {
            const { name, github, live, figma, tags, lead, image } = item;
            return (
                <CardFullWidth
                    key={name}
                    name={name}
                    github={github}
                    live={live}
                    figma={figma}
                    tags={tags}
                    lead={lead}
                    image={image.asset.gatsbyImageData}
                />
            );
        })}
    </CardFullWidthWrapperStyles>
);

export default CardFullWidthWrapper;
