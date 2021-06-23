import { graphql } from 'gatsby';
import React from 'react';

import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import SectionHero from 'src/components/SectionHero/SectionHero';

const CVPage = ({ data }) => {
    const imgSrc = data.sanityCvPageData.image.asset.gatsbyImageData;
    const { title, description, github, linkedin, cv, pdf } = data.sanityCvPageData;
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
        </Layout>
    );
};

export const pageQuery = graphql`
    query CvQuery {
        sanityCvPageData {
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

export default CVPage;
