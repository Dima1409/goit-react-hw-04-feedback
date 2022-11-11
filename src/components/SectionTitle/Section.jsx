import React from "react";
import PropTypes from 'prop-types';
import { Feedback, FeedbackTitle } from "./Section.styled";

const Section =({title='', children}) => {
return (
    <>
    <Feedback>
<FeedbackTitle>{title}</FeedbackTitle>
<>{children}</>
    </Feedback>
    </>
)
}

export default Section;

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
