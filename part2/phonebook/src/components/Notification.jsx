const Notification = ({ message, notification }) => {
  if (message === null) {
    return null;
  }
  return <div className={`notification-${notification}`}>{message}</div>;
};

export default Notification;
