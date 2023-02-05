import React from 'react';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      {!good && !neutral && !bad ? (
        <Notification message="There is no feedback" />
      ) : (
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {total()}</p>
          </li>
          <li>
            <p>Positive feedback:{positivePercentage()}%</p>
          </li>
        </ul>
      )}
    </div>
  );
};
