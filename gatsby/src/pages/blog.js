import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import Pagination from 'src/components/Pagination/Pagination';
import SectionHero from 'src/components/SectionHero/SectionHero';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import projectConfig from 'src/projectConfig';
import CardBlogPostEntryWrapper from 'src/components/CardBlogPostEntryWrapper/CardBlogPostEntryWrapper';
import Heading from '../components/Heading/Heading';

const BlogPage = ({ data, pageContext }) => {
    if (pageContext.dirName === undefined) {
        pageContext.dirName = `/blog`;
    }
    const categories = data.category;
    const tags = data.tag;
    const { allPosts } = data;

    let postsToDisplay;
    switch (pageContext.pageType) {
        case 'allPaginatedPosts':
            postsToDisplay = allPosts;
            break;
        case 'allPostsInCategory':
            postsToDisplay = categories;
            break;
        case 'allPostsInTag':
            postsToDisplay = tags;
            break;
        default:
            postsToDisplay = allPosts;
    }

    const imgSrc = data.sanityBlogPageData.image.asset.gatsbyImageData;
    const { title, description, github, linkedin, cv, pdf } = data.sanityBlogPageData;

    const heading = (
        <BootsContainer>
            <Heading tag="h2">
                {pageContext.dirName === '/blog' ? 'All posts' : pageContext.dirName.substring(1)}
            </Heading>
        </BootsContainer>
    );
    return (
        <Layout>
            <SEO
                title={`Blog page ${pageContext.sellectionName ? `| ${pageContext.sellectionName}` : ''} ${
                    pageContext.currentPage ? `| ${pageContext.currentPage}` : ''
                }`}
            />
            <SectionHero
                imgSrc={imgSrc}
                title={title}
                description={description}
                github={github}
                linkedin={linkedin}
                cv={cv}
                pdf={pdf}
                blog="true"
                pageSize={projectConfig.pagesAmountInSet}
                totalCount={postsToDisplay.totalCount}
                currentPage={pageContext.currentPage || 1}
                skip={pageContext.skip}
                base={pageContext.dirName}
            />
            {heading}
            <CardBlogPostEntryWrapper postsToDisplay={postsToDisplay} />
            <Pagination />
        </Layout>
    );
};

export const pageQuery = graphql`
    query pagesQuery($selectionName: String, $skip: Int = 0, $pageSize: Int) {
        site {
            siteMetadata {
                title
            }
        }
        sanityBlogPageData {
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
        category: allSanityBlogPosts(
            limit: $pageSize
            skip: $skip
            sort: { order: DESC, fields: date }
            filter: { categories: { elemMatch: { name: { eq: $selectionName } } } }
        ) {
            totalCount
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
        tag: allSanityBlogPosts(
            limit: $pageSize
            skip: $skip
            sort: { order: DESC, fields: date }
            filter: { tags: { elemMatch: { name: { eq: $selectionName } } } }
        ) {
            totalCount
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
        allPosts: allSanityBlogPosts(limit: $pageSize, skip: $skip, sort: { order: DESC, fields: date }) {
            totalCount
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
`;

export default BlogPage;
