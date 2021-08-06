import React, { useEffect, useRef, useState } from 'react';
import loadable from '@loadable/component';

import { GatsbyImage } from 'gatsby-plugin-image';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Squeeze as Hamburger } from 'hamburger-react';
import { CardBlogPostEntryStyles } from './CardBlogPostEntry.style';

const Logo = loadable(() => import('src/components/Logo/Logo'));

gsap.registerPlugin(ScrollTrigger);

const CardBlogPostEntry = React.forwardRef(
    ({ name, date, github, live, test, figma, tags, lead, image, fullWidth }, ref) => {
        const [isOpen, setOpen] = useState(false);
        let wrapper = useRef(null);

        useEffect(() => {
            gsap.set(wrapper, { autoAlpha: 0 });

            const cardAnimation = gsap.timeline({ defaults: { ease: 'power3.inOut' } }).fromTo(
                wrapper,
                { autoAlpha: 0 },
                {
                    duration: 0.7,
                    autoAlpha: 1,
                }
            );

            ScrollTrigger.create({
                trigger: wrapper,
                animation: cardAnimation,
                start: 'center bottom',
            });
        }, []);

        // Create local components
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

        const githubLink = github && (
            <a href={github} target="blank" rel="noopener noreferrer">
                GitHub
            </a>
        );

        const allTags = tags && tags.map((tag) => <p key={tag.name}>#{tag.name}</p>);

        const moreInfo = (
            <div className="logoWrapper infoWrapper">
                <p>{lead}</p>
                <div className="allTags">{allTags}</div>
            </div>
        );

        const liveLink = live && (
            <a href={live} target="blank" rel="noopener noreferrer">
                Live
            </a>
        );

        const testLink = test && (
            <a
                href={`https://developers.google.com/speed/pagespeed/insights/?url=${live}&tab=desktop`}
                target="blank"
                rel="noopener noreferrer"
            >
                Test
            </a>
        );

        const figmaLink = figma && (
            <a href={figma} target="blank" rel="noopener noreferrer">
                Figma
            </a>
        );

        const cardBurger = lead && (
            <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={20}
                duration={0.2}
                hideOutline={false}
                label="Show card details"
                color="#DC3545"
            />
        );

        return (
            <CardBlogPostEntryStyles fullWidth={fullWidth} ref={(el) => (wrapper = el)}>
                <div className="titleWrapper">
                    <div className="topBar">
                        <h3>{name}</h3>
                        {cardBurger}
                    </div>
                    {date}
                </div>
                {isOpen ? moreInfo : picture}
                <div className="linkWrapper">
                    {githubLink}
                    {liveLink}
                    {testLink}
                    {figmaLink}
                </div>
            </CardBlogPostEntryStyles>
        );
    }
);

export default CardBlogPostEntry;
