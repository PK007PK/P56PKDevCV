import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { CardFullwidthStyles } from './CardFullWidth.styles';

const CardFullwidth = ({ name, github, live, figma, tags, lead, image }) => (
    <CardFullwidthStyles>
        <GatsbyImage
            className="background"
            image={image}
            placeholder="blurred"
            alt={name}
            formats={['auto', 'webp']}
            quality={50}
        />
        <div className="txtWrapper">
            <div className="titleBar">
                <h3>{name}</h3>
            </div>
            <div className="contentBox">
                <p>{lead}</p>
            </div>
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
        </div>
    </CardFullwidthStyles>
);

export default CardFullwidth;