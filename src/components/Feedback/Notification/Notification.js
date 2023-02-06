import React from 'react';

export const Notification = ({ message, cls }) => {
  return <p className={cls}>{message}</p>;
};
