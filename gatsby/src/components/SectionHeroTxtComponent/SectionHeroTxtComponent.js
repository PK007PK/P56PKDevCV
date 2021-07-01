import React from 'react';
import { Link } from 'gatsby';

import Button from 'src/components/Button/Button';

import { SectionHeroTxtComponentStyles } from './SectionHeroTxtComponent.styles';

const SectionHeroTxtComponent = ({ title, description, linkedin, github, cv, pdf }) => {
    const linkedinBtn = linkedin && (
        <Button as="a" href={linkedin} target="blank" rel="noopener noreferrer" active1>
            LinkedIn
        </Button>
    );

    const githubBtn = github && (
        <Button as="a" href={github} target="blank" rel="noopener noreferrer" active2>
            GitHub
        </Button>
    );

    const cvBtn = cv && (
        <Button as={Link} to="/cv" dark="true">
            CV
        </Button>
    );

    const pdfBtn = pdf && <Button dark="true">PDF</Button>;

    return (
        <SectionHeroTxtComponentStyles>
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
            <div className="buttonsWrapper">
                {linkedinBtn}
                {githubBtn}
                {cvBtn}
                {pdfBtn}
            </div>
        </SectionHeroTxtComponentStyles>
    );
};

export default SectionHeroTxtComponent;
