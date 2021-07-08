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

    const courses = data.sanityAllMyCourses;
    const fixedArray = courses.menuItems.reverse();
    return (
        <CardCourseWrapperStyles>
            <h3>Courses</h3>
            {fixedArray.map((item, i) => (
                <CardCourse key={i} courseName={item.courseName} author={item.author} platform={item.platform} />
            ))}
        </CardCourseWrapperStyles>
    );
};

export default CardBlogPostEntryWrapper;
