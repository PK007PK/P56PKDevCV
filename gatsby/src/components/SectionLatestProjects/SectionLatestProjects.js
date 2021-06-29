import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import CardFullWidthWrapper from 'src/components/CardFullWidthWrapper/CardFullWidthWrapper';
import Button from 'src/components/Button/Button';
import Heading from 'src/components/Heading/Heading';
import { SectionLatestProjectsStyles } from './SectionLatestProjects.styles';

const SectionLatestProjects = () => {
    const data = useStaticQuery(graphql`
        query LatestProjectQuery {
            allSanityBlogPosts(
                limit: 3
                sort: { fields: [date], order: DESC }
                filter: { categories: { elemMatch: { name: { eq: "Projects" } } } }
            ) {
                nodes {
                    name
                    github
                    live
                    figma
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
            <BootsContainer>
                <Heading tag="h2">Latest projects</Heading>
                <CardFullWidthWrapper data={data} />
                <BootsRow className="buttonBar">
                    <BootsColumn md="5" lg="4">
                        <Button to="/blog/1" as={Link} big="true" active2="true">
                            All projects
                        </Button>
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </SectionLatestProjectsStyles>
    );
};

export default SectionLatestProjects;
