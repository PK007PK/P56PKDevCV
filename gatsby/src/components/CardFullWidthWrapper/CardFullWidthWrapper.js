import React from 'react';
import CardBlogPostEntry from 'src/components/CardBlogPostEntry/CardBlogPostEntry';
import { CardFullWidthWrapperStyles } from './CardFullWidthWrapper.styles';

const CardFullWidthWrapper = ({ data }) => (
    <CardFullWidthWrapperStyles>
        {data.allSanityBlogPosts.nodes.map((item) => {
            const { name, github, live, figma, tags, lead, image } = item;
            return (
                <CardBlogPostEntry
                    key={name}
                    name={name}
                    github={github}
                    live={live}
                    figma={figma}
                    tags={tags}
                    lead={lead}
                    image={image.asset.gatsbyImageData}
                    fullWidth="true"
                />
            );
        })}
    </CardFullWidthWrapperStyles>
);

export default CardFullWidthWrapper;
