import transactionsStyles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <section className={transactionsStyles.transaction}>
      <table className={transactionsStyles.transaction_history}>
        <thead className={transactionsStyles.thead}>
          <tr>
            <th className={transactionsStyles.thead__item}>Type</th>
            <th className={transactionsStyles.thead__item}>Amount</th>
            <th className={transactionsStyles.thead__item}>Currency</th>
          </tr>
        </thead>
        <tbody className={transactionsStyles.tbody}>
          {items.map(item => (
            <tr key={item.id} className={transactionsStyles.tbody__list}>
              <td className={transactionsStyles.tbody__item}>{item.type}</td>
              <td className={transactionsStyles.tbody__item}>{item.amount}</td>
              <td className={transactionsStyles.tbody__item}>
                {item.currency}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;