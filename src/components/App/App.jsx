import { Statistics } from "../Statistics/Statistics";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";
import { Fragment, useState } from "react";

export default function App() {
  const [value, setValue] = useState({ good: 0, neutral: 0, bad: 0 });

  const increment = (event) => setValue((prevValue) => ({ ...prevValue, [event]: value[event] + 1 }));
  const countTotalFeedback = () => Object.values(value).reduce((acc, val) => acc + val, 0);
  const countPositiveFeedbackPercentage = () => Math.round((value.good * 100) / countTotalFeedbacks);

  const options = Object.keys(value);
  const statistics = Object.entries(value);
  const countTotalFeedbacks = countTotalFeedback();
  const countInPercentage = countPositiveFeedbackPercentage();

  return (
    <Fragment>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={increment} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedbacks > 0 && <Statistics statistics={statistics} total={countTotalFeedbacks} positivePercentage={countInPercentage} />}
        {countTotalFeedbacks === 0 && <Notification message="There is no feedback" />}
      </Section>
    </Fragment>
  );
}
