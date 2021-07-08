import React, { useEffect, useRef, useContext } from 'react';

import { gsap } from 'gsap';
import AppContext from 'src/AppProvider';

import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { MenuDropDownStyles } from './MenuDropDown.styles';

const Menu = () => {
    const { toogleIsMenuActive, isMenuActive } = useContext(AppContext);
    const data = useStaticQuery(graphql`
        query QueryMenuItems2 {
            sanityMenuData {
                menuItems {
                    pageSlug
                    pageName
                }
            }
            allSanityBlogPostsCategories(sort: { order: ASC, fields: position }) {
                nodes {
                    name
                    position
                    slug {
                        current
                    }
                }
            }
            allSanityBlogPostsTags(sort: { order: ASC, fields: position }) {
                nodes {
                    name
                    position
                    slug {
                        current
                    }
                }
            }
        }
    `);
    const menuData = data.sanityMenuData.menuItems;
    const categories = data.allSanityBlogPostsCategories.nodes;
    const tags = data.allSanityBlogPostsTags.nodes;
    // create refs for our DOM elements
    let menuWrapper = useRef(null);

    useEffect(() => {
        gsap.to(menuWrapper, { duration: 0.3, css: { display: 'block', top: 0 } });
    }, [isMenuActive]);

    const Submenu = ({ data, name, className }) => (
        <div>
            <h2 className="title">{name}</h2>
            <ul className={className}>
                {data.map((item, i) => (
                    <li key={i}>
                        <Link
                            className="fx-txt-underline"
                            to={item.pageSlug || `/${item.slug.current}/1`}
                            onClick={toogleIsMenuActive}
                        >
                            {item.pageName || item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
    return (
        <MenuDropDownStyles ref={(el) => (menuWrapper = el)}>
            <BootsContainer className="container">
                <nav>
                    <div className="topBar">
                        <Submenu name="Menu" data={menuData} />
                        <Submenu name="Categories" data={categories} />
                    </div>
                    <Submenu className="bottomBar" name="Tags" data={tags} />
                </nav>
            </BootsContainer>
            <div className="colorWrapper1" />
            <div className="colorWrapper2" />
        </MenuDropDownStyles>
    );
};

export default Menu;
