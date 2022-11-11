import React from "react";
import PropTypes from 'prop-types';
import {StatisticList, StatisticItem} from './Statistics.styled'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    
    return (
        <>
        <StatisticList>
            <StatisticItem>Good: <span>{good}</span></StatisticItem>
            <StatisticItem>Neutral: <span>{neutral}</span></StatisticItem>
            <StatisticItem>Bad: <span>{bad}</span></StatisticItem>
            <StatisticItem>Total: <span>{total}</span></StatisticItem>
            <StatisticItem>Positive feedback: <span>{positivePercentage}%</span></StatisticItem>
        </StatisticList>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}

export default Statistics;