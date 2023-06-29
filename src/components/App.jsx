import { Component } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import { GlobalStyle } from './GlobalStyle';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const name = e.target.name;
    const step = 1;
    this.setState(state => ({
      [name]: state[name] + step,
    }));
  };

  countTotalFeedback = () => {
    const items = Object.values(this.state);
    return items.reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    let positiveValue = 0;
    const positive = this.state.good;
    const total = this.countTotalFeedback();
    if (positive) {
      positiveValue = Math.round((positive / total) * 100);
    }
    return positiveValue;
  };

  render() {
    const { good, neutral, bad, total } = this.state;
    const totalFeedback = this.countTotalFeedback(total);
    return (
      <>
        <GlobalStyle />
        <div className="container">
          <Section title="Please leave feedback">
            <FeedbackOptions onLeaveFeedback={this.handleClick} />
          </Section>
          <Section title="Statistics">
            {!totalFeedback ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </div>
      </>
    );
  }
}
