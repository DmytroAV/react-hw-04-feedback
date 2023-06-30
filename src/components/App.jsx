import { useState } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import { GlobalStyle } from './GlobalStyle';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

  const handleChange = e => {
    const { name } = e.target;

    const step = 1;
    switch (name) {
      case 'good':
        setGood(state => state + step);
        break;
      case 'neutral':
        setNeutral(state => state + step);
        break;
      case 'bad':
        setBad(state => state + step);
        break;
      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    let positiveValue = 0;
    const positive = good;
    if (positive) {
      positiveValue = Math.round((positive / total) * 100);
    }
    return positiveValue;
  };

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions onChange={handleChange} />
        </Section>
        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    </>
  );
}
