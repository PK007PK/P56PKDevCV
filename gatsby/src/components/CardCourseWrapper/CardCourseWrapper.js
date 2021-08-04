import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import CardCourse from 'src/components/CardCourse/CardCourse';
import { CardCourseWrapperStyles } from './CardCourseWrapper.style';

const CardBlogPostEntryWrapper = () => {
    const data = useStaticQuery(graphql`
        {
            sanityAllMyCourses {
                menuItems {
                    courseName
                    author
                    platform
                }
            }
        }
    `);

    const { menuItems } = data.sanityAllMyCourses;
    return (
        <CardCourseWrapperStyles>
            <h3>Courses</h3>
            {menuItems.map((item, i) => (
                <CardCourse key={i} courseName={item.courseName} author={item.author} platform={item.platform} />
            ))}
        </CardCourseWrapperStyles>
    );
};

export default CardBlogPostEntryWrapper;
