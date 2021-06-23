import React from 'react';

import Button from 'src/components/Button/Button';
import { SectionHeroTxtComponentStyles } from './SectionHeroTxtComponent.styles';

const SectionHeroTxtComponent = ({ title, description }) => (
    <SectionHeroTxtComponentStyles>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="buttonsWrapper">
            <Button as="a" active1>
                LinkedIn
            </Button>
            <Button as="a" active2>
                GitHub
            </Button>
            <Button dark>CV</Button>
        </div>
    </SectionHeroTxtComponentStyles>
);

export default SectionHeroTxtComponent;
