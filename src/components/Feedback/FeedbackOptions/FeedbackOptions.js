import React from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  console.log(options);
  return (
    <ul className={css.list}>
      {options.map((el, index) => {
        return (
          <li className={css.item} key={index}>
            <button name={el} type="button" onClick={onLeaveFeedback}>
              {el}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
