import { graphql, useStaticQuery } from 'gatsby';

const useSiteConfig = () => {
    const data = useStaticQuery(graphql`
        query {
            sanitySiteTechConfig {
                pagesInSet
                # siteUrl
                # googleId
            }
        }
    `);
    return data.sanitySiteTechConfig;
};

export default useSiteConfig;
