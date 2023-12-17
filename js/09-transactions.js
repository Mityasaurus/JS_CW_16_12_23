import transactions from "./data/transactions.js";
import transactionHistory from "./data/transactions.js";
const makeTransactionTableRow = (transaction) => {
  const { id, amount, date, business, type, name, account } = transaction;
  return `<tr>
  <td>${id}</td>
  <td>${amount}</td>
  <td>${date}</td>
  <td>${business}</td>
  <td>${type}</td>
  <td>${name}</td>
  <td>${account}</td>
  </tr>`;
};

const tableEl = document.querySelector(".js-transaction-table");

const tableRowsMarkup = transactionHistory
  .map(makeTransactionTableRow)
  .join("");

tableEl.insertAdjacentHTML("beforeend", tableRowsMarkup);
