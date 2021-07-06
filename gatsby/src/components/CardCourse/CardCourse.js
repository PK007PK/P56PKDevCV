import React from 'react';
import { CardCourseStyles } from './CardCourse.styles';

export default function CardCourse({ courseName, author, platform }) {
    //
    return (
        <CardCourseStyles>
            <p className="author">{author}</p>
            <p className="course">{courseName}</p>
        </CardCourseStyles>
    );
}
