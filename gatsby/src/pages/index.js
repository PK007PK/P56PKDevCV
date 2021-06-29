import { graphql } from 'gatsby';
import React from 'react';

import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import SectionHero from 'src/components/SectionHero/SectionHero';
import SectionLatestProjects from 'src/components/SectionLatestProjects/SectionLatestProjects';
import SectionCodeWars from 'src/components/SectionCodeWars/SectionCodeWars';

const IndexPage = ({ data }) => {
    const imgSrc = data.sanityHomePageData.image.asset.gatsbyImageData;
    const { title, description, github, linkedin, cv, pdf } = data.sanityHomePageData;

    return (
        <Layout>
            <SEO
            // title={content.frontmatter.title}
            // description={content.frontmatter.description || content.excerpt}
            />
            <SectionHero
                imgSrc={imgSrc}
                title={title}
                description={description}
                github={github}
                linkedin={linkedin}
                cv={cv}
                pdf={pdf}
            />
            <SectionLatestProjects />
            {/* <SectionCodeWars /> */}
        </Layout>
    );
};

export const pageQuery = graphql`
    query HomeQuery {
        sanityHomePageData {
            image {
                asset {
                    gatsbyImageData
                }
            }
            title
            description
            github
            linkedin
            cv
            pdf
        }
    }
`;

export default IndexPage;
