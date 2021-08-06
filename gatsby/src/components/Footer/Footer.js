import React from 'react';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import { useStaticQuery, graphql } from 'gatsby';
import { FooterStyles } from './Footer.style';

export default function Footer() {
    const data = useStaticQuery(graphql`
        {
            sanitySiteSettings {
                copyright
            }
        }
    `);
    return (
        <FooterStyles>
            <BootsContainer>
                <p className="copyright">
                    &copy; {data.sanitySiteSettings.copyright} {new Date().getFullYear()}
                </p>
            </BootsContainer>
        </FooterStyles>
    );
}
