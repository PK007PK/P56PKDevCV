import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Logo from 'src/components/Logo/Logo';
import { Squeeze as Hamburger } from 'hamburger-react';
import { CardBlogPostEntryStyles } from './CardBlogPostEntry.style';

const CardBlogPostEntry = ({ name, github, live, figma, tags, lead, image }) => {
    const [isOpen, setOpen] = useState(false);

    const picture = image ? (
        <GatsbyImage
            className="backgroundImg"
            image={image}
            placeholder="blurred"
            alt={name}
            formats={['auto', 'webp']}
            quality={50}
        />
    ) : (
        <div className="logoWrapper">
            <Logo />
        </div>
    );

    const moreInfo = (
        <div className="logoWrapper infoWrapper">
            <p>{lead}</p>
        </div>
    );

    return (
        <CardBlogPostEntryStyles>
            <div className="titleWrapper">
                <h3>{name}</h3>
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    size={20}
                    duration={0.2}
                    hideOutline={false}
                    label="Show card details"
                    color="#DC3545"
                />
            </div>
            {isOpen ? moreInfo : picture}

            <div className="linkWrapper">
                {github && (
                    <a href={github} target="blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                )}
                {live && (
                    <a href={live} target="blank" rel="noopener noreferrer">
                        Live
                    </a>
                )}
                {live && (
                    <a
                        href={`https://developers.google.com/speed/pagespeed/insights/?url=${live}&tab=desktop`}
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        Test
                    </a>
                )}
                {figma && (
                    <a href={figma} target="blank" rel="noopener noreferrer">
                        Figma
                    </a>
                )}
            </div>
        </CardBlogPostEntryStyles>
    );
};

export default CardBlogPostEntry;
