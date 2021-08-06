import React from 'react';
import loadable from '@loadable/component';

import { GatsbyImage } from 'gatsby-plugin-image';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import { SectionHeroStyles } from './SectionHero.styles';

const SectionHeroTxtComponent = loadable(() =>
    import('src/components/SectionHeroTxtComponent/SectionHeroTxtComponent')
);
const FilterCategory = loadable(() => import('src/components/FilterCategory/FilterCategory'));
const FilterTags = loadable(() => import('src/components/FilterTags/FilterTags'));
const Pagination = loadable(() => import('src/components/Pagination/Pagination'));

const SectionHero = ({
    imgSrc,
    title,
    description,
    linkedin,
    github,
    cv,
    pdf,
    blog,
    pageSize,
    totalCount,
    currentPage,
    skip,
    base,
    max,
}) => {
    const blogPagination = blog && (
        <Pagination
            className="blogPagination"
            pageSize={pageSize}
            totalCount={totalCount}
            currentPage={currentPage}
            skip={skip}
            base={base}
        />
    );

    return (
        <SectionHeroStyles max={max}>
            <GatsbyImage
                image={imgSrc}
                placeholder="blurred"
                alt="Abstract background decoration"
                formats={['auto', 'webp']}
                quality={50}
                className="backImg"
            />
            <div className="imgWrapper" />
            <div className="txtWrapper">
                <BootsContainer>
                    <SectionHeroTxtComponent
                        title={title}
                        description={description}
                        linkedin={linkedin}
                        github={github}
                        cv={cv}
                        pdf={pdf}
                    />
                    {blog && <FilterCategory className="categoriesFilter" />}
                    {blog && <FilterTags className="tagsFilter" />}
                    {blogPagination}
                </BootsContainer>
            </div>
        </SectionHeroStyles>
    );
};

export default SectionHero;
