import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ children, location, title, image }) => {
    const data = useStaticQuery(graphql`
        {
            sanitySiteSettings {
                title
                description
                lang
                svgLogo {
                    _rawAsset(resolveReferences: { maxDepth: 10 })
                }
            }
        }
    `);

    const svg = data.sanitySiteSettings?.svgLogo?._rawAsset?.metadata?.lqip;

    return (
        <Helmet>
            <html lang={data.sanitySiteSettings?.lang || 'en'} />
            <title>{title || data.sanitySiteSettings?.title}</title>

            {/* Fav Icons */}
            <link rel="icon" href={svg || null} type="image/svg+xml" />

            {/* Meta Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <meta name="description" content={data.sanitySiteSettings?.description || 'Default description'} />

            {/* Open Graph */}
            {location && <meta property="og:url" content={location.href} />}

            {/* <meta property="og:image" content={image || '/logo.svg'} /> */}
            {/* <meta property="og:title" content={title} key="ogtitle" /> */}
            <meta property="og:title" content="dfddf" key="ogtitle" />
            <meta propery="og:site_name" content={data.sanitySiteSettings?.title} key="ogsitename" />
            <meta property="og:description" content={data.sanitySiteSettings?.description} key="ogdesc" />
            {children}
        </Helmet>
    );
};
export default SEO;
