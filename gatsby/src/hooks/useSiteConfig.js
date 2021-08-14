import { graphql, useStaticQuery } from 'gatsby';

const useSiteConfig = () => {
    const data = useStaticQuery(graphql`
        query {
            sanitySiteConfig {
                pagesInSet
                siteUrl
                googleId
            }
        }
    `);
    return data.sanitySiteConfig;
};

export default useSiteConfig;
