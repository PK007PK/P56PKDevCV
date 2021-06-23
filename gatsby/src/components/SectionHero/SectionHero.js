import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import SectionHeroTxtComponent from 'src/components/SectionHeroTxtComponent/SectionHeroTxtComponent';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import { SectionHeroStyles } from './SectionHero.styles';

const SectionHero = ({ imgSrc, title, description, linkedin, github, cv, pdf }) => (
    <SectionHeroStyles>
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
            </BootsContainer>
        </div>
    </SectionHeroStyles>
);

export default SectionHero;
