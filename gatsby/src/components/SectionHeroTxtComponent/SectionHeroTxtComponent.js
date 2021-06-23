import React from 'react';
import { Link } from 'gatsby';

import Button from 'src/components/Button/Button';
import { SectionHeroTxtComponentStyles } from './SectionHeroTxtComponent.styles';

const SectionHeroTxtComponent = ({ title, description, linkedin, github, cv, pdf }) => (
    <SectionHeroTxtComponentStyles>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="buttonsWrapper">
            {linkedin && (
                <Button as="a" href={linkedin} target="blank" rel="noopener noreferrer" active1>
                    LinkedIn
                </Button>
            )}
            {github && (
                <Button as="a" href={github} target="blank" rel="noopener noreferrer" active2>
                    GitHub
                </Button>
            )}
            {cv && (
                <Link to="/cv">
                    <Button dark>CV</Button>
                </Link>
            )}
            {pdf && <Button dark>PDF</Button>}
        </div>
    </SectionHeroTxtComponentStyles>
);

export default SectionHeroTxtComponent;
