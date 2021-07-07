import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import SectionHeroTxtComponent from 'src/components/SectionHeroTxtComponent/SectionHeroTxtComponent';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import FilterCategory from 'src/components/FilterCategory/FilterCategory';
import FilterTags from 'src/components/FilterTags/FilterTags';
import { SectionHeroStyles } from './SectionHero.styles';
import Pagination from '../Pagination/Pagination';

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
                </BootsContainer>
            </div>
            {blogPagination}
        </SectionHeroStyles>
    );
};

export default SectionHero;
