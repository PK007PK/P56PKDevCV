import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FilterCategoryStyles } from './FilterCategory.style';

export default function FilterCategory() {
    const data = useStaticQuery(graphql`
        {
            allSanityBlogPostsCategories(sort: { order: ASC, fields: name }) {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    const categories = data.allSanityBlogPostsCategories.nodes;

    return (
        <FilterCategoryStyles>
            <Link to="/blog/1" activeStyle={{ color: 'red' }}>
                <span className="name">All posts</span>
            </Link>
            {categories.map((category) => (
                <Link to={`/${category.slug.current}/1`} activeStyle={{ color: 'red' }} key={category.slug.current}>
                    {category.name}
                </Link>
            ))}
        </FilterCategoryStyles>
    );
}