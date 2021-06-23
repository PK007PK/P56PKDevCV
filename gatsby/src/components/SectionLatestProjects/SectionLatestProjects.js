import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import CardFullwidth from 'src/components/CardFullWidth/CardFullWidth';

import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import CardFullWidthWrapper from 'src/components/CardFullWidthWrapper/CardFullWidthWrapper';
import { SectionLatestProjectsStyles } from './SectionLatestProjects.styles';

const SectionLatestProjects = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allSanityBlogPosts(
                limit: 3
                sort: { fields: [date], order: DESC }
                filter: { categories: { elemMatch: { name: { eq: "Project" } } } }
            ) {
                nodes {
                    name
                    lead
                    date(formatString: "")
                    slug {
                        current
                    }
                    image {
                        asset {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `);

    return (
        <SectionLatestProjectsStyles>
            {/* Prepare repeatable heading component */}
            <BootsContainer>
                <h2>Latest projects</h2>
                <CardFullWidthWrapper data={data} />
            </BootsContainer>
        </SectionLatestProjectsStyles>
    );
};

export default SectionLatestProjects;
