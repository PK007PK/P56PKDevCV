import React from 'react';
import CardBlogPostEntry from 'src/components/CardBlogPostEntry/CardBlogPostEntry';

import { BlogGrid } from 'src/components/Grids/Grids.js';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import { CardBlogPostEntryWrapperStyles } from './CardBlogPostEntryWrapper.style';

const CardBlogPostEntryWrapper = ({ postsToDisplay }) => (
    <CardBlogPostEntryWrapperStyles>
        <BootsContainer>
            <ul style={{ listStyle: `none`, paddingLeft: 0 }}>
                <BlogGrid>
                    {postsToDisplay.nodes
                        .filter((post) => post.date !== null)
                        .map((post, i) => (
                            <CardBlogPostEntry
                                key={i}
                                date={post.date}
                                name={post.name}
                                github={post.github}
                                live={post.live}
                                test={post.test}
                                figma={post.figma}
                                tags={post.tags}
                                lead={post.lead}
                                image={post.image?.asset?.gatsbyImageData}
                            />
                        ))}
                </BlogGrid>
            </ul>
        </BootsContainer>
    </CardBlogPostEntryWrapperStyles>
);

export default CardBlogPostEntryWrapper;
