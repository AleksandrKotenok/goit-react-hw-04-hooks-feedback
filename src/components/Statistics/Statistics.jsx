import PropTypes from "prop-types";
import s from "../Statistics/Statistics.module.css";

export const Statistics = ({ statistics, total, positivePercentage }) => {
  return (
    <>
      <ul className={s.statBox}>
        {statistics.map(([key, value]) => (
          <li key={key}>
            {key}:{value}
          </li>
        ))}
        <li className={s.stat}>Total:{total}</li>
        <li className={s.stat}>Positive feedback:{positivePercentage}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
