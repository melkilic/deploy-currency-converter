/** @format */

import React, { Component } from "react";

const CurrencyRow = (props) => {
  const {
    options,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;
  return (
    <div className="currency">
      {/* From/To */}
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyRow;
