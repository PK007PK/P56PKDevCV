import { graphql } from 'gatsby';
import React from 'react';

import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import SectionHero from 'src/components/SectionHero/SectionHero';
import { CVPageGrid } from 'src/components/Grids/Grids';
import BlockContent from '@sanity/block-content-to-react';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import FilterTags from 'src/components/FilterTags/FilterTags';

const CVPage = ({ data }) => {
    const imgSrc = data.sanityCvPageData.image.asset.gatsbyImageData;
    const { title, description, github, linkedin, cv, pdf, _rawRichText } = data.sanityCvPageData;
    const extraSlotData = [
        {
            slug: { current: 'blog' },
            name: 'React',
        },
    ];
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
            <BootsContainer>
                <CVPageGrid>
                    <BlockContent
                        blocks={_rawRichText}
                        dataset="production"
                        url=""
                        projectId={process.env.SANITY_PROJECT_ID}
                    />
                    <div className="skills">
                        <h3 className="title">Skills:</h3>
                        <FilterTags extraSlot={extraSlotData} />
                    </div>
                </CVPageGrid>
            </BootsContainer>
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
            _rawRichText
        }
    }
`;

export default CVPage;
