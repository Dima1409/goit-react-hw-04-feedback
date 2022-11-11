import React from "react";
import PropTypes from 'prop-types';
import { FeedbackList, FeedbackItem } from "./FeedbackOptions.styled";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
          <FeedbackList>
        {options.map((option)=>{
            return <FeedbackItem type='button' key={option+'id'} onClick={()=>onLeaveFeedback(option)}>{option}</FeedbackItem>
        })}
         </FeedbackList>
        </>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
}