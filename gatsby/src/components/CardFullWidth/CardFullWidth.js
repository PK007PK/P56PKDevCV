import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { CardFullwidthStyles } from './CardFullWidth.styles';

const CardFullwidth = ({ name, lead, image }) => (
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
                <span>=</span>
            </div>
            <div className="contentBox">
                <p>{lead}</p>
            </div>
            <div className="bottomBar">
                <a>github</a>
                <a>Live</a>
                <a>Test</a>
                <a>Figma</a>
            </div>
        </div>
    </CardFullwidthStyles>
);

export default CardFullwidth;
