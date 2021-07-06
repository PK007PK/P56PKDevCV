import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FilterTagStyles } from './FilterTagStyles';

export default function FilterTags({ className, extraSlot }) {
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

    const tags = extraSlot ? extraSlot.concat(data.allSanityBlogPostsTags.nodes) : data.allSanityBlogPostsTags.nodes;

    return (
        <FilterTagStyles className={className}>
            {tags.map((tag) => (
                <Link to={`/${tag.slug.current}/1`} activeStyle={{ color: 'red' }} key={tag.name}>
                    #{tag.name}
                </Link>
            ))}
        </FilterTagStyles>
    );
}
