import SectionTitle from '../SectionTitle/Section';
import Statistics from '../Statistics/Statistics';
import { FeedbackTitle } from './App.styled';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from "components/Notification/Notification";
import {useState} from 'react';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleButtonFeedback = type => {
    setFeedback(state=>({
      ...state,
      [type]: state[type] + 1,
    }))
  }

  
  const countTotalFeedback = () => {
     return good + bad + neutral; 
  }

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = good + bad + neutral;
    if(good===0) {
        return 0;
    }
    return Math.round(good * 100 / totalFeedback);
  }
  const {good, bad, neutral} = feedback;
  const total = countTotalFeedback();
  const totalGood = countPositiveFeedbackPercentage();
  return (
         <>
        <SectionTitle title='Please leave feedback'>
        <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={handleButtonFeedback}/>
        <FeedbackTitle>Statistics</FeedbackTitle>
        {total ? <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        positivePercentage={totalGood}/> : <Notification message="There is no feedback"/>}
        </SectionTitle>  
        </>
      )
}

export default App;
