import { graphql } from 'gatsby';
import React from 'react';

import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import SectionHero from 'src/components/SectionHero/SectionHero';

const IndexPage = ({ data }) => {
    console.log(data);
    const imgSrc = data.sanityHomePageData.image.asset.gatsbyImageData;
    const { title, description } = data.sanityHomePageData;
    return (
        <Layout>
            <SEO
            // title={content.frontmatter.title}
            // description={content.frontmatter.description || content.excerpt}
            />
            <SectionHero imgSrc={imgSrc} title={title} description={description} />
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
        }
    }
`;

export default IndexPage;
