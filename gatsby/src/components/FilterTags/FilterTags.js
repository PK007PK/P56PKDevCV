import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FilterTagStyles } from './FilterTagStyles';

export default function FilterTags({ className }) {
    const data = useStaticQuery(graphql`
        query {
            allSanityBlogPostsTags(sort: { order: ASC, fields: position }) {
                nodes {
                    name
                    position
                    slug {
                        current
                    }
                }
            }
        }
    `);

    const tags = data.allSanityBlogPostsTags.nodes;

    return (
        <FilterTagStyles className={className}>
            {tags.map((tag) => (
                <Link to={`/${tag.slug.current}/1`} activeStyle={{ color: 'red' }} key={tag.slug.current}>
                    #{tag.name}
                </Link>
            ))}
        </FilterTagStyles>
    );
}
