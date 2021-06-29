import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Squeeze as Hamburger } from 'hamburger-react';
import { CardFullwidthStyles } from './CardFullWidth.styles';

const CardFullwidth = ({ name, github, live, figma, tags, lead, image }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <CardFullwidthStyles>
            {!isOpen && (
                <GatsbyImage
                    className="background"
                    image={image}
                    placeholder="blurred"
                    alt={name}
                    formats={['auto', 'webp']}
                    quality={50}
                />
            )}
            <div className="txtWrapper">
                <div className="titleBar">
                    <h3>{name}</h3>
                    <div className="hamburgerWrapper">
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
                </div>
                {isOpen && (
                    <div className="contentBox">
                        <p>{lead}</p>
                    </div>
                )}
                {isOpen && (
                    <div className="bottomBar">
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
                )}
            </div>
        </CardFullwidthStyles>
    );
};

export default CardFullwidth;
