import React from 'react';
import PropTypes from 'prop-types';

import MoneyInput from 'app/moneyInput/moneyInput.js';

import GraphType from 'models/graphType.js';

import './incomeInput.less';


class IncomeInput extends React.Component {
  onChangeIncomePerMonth(value) {
    this.props.onChange(value * 12);
  }

  onChangeIncomePerDay(value) {
    this.props.onChange(value * 12 * 20);
  }

  onChangeIncomePerHour(value) {
    this.props.onChange(value * 12 * 20 * 8);
  }

  render() {
    const income = this.props.value;
    const incomePerMonth = Math.floor(income / 12);
    const incomePerDay = Math.floor(income / (12 * 20));
    const incomePerHour = Math.floor(income / (12 * 20 * 8));

    return (
      <div className="income-input">
        <p>
          <input
            type="radio"
            name="graphType"
            value={GraphType.YEAR}
            checked={props.graphType === GraphType.YEAR}
            onChange={event => props.setTaxPayerType(event.target.value)}
          />
          <MoneyInput value={income} onChange={this.props.onChange.bind(this)} />
        </p>
        <p>
          <input
            type="radio"
            name="graphType"
            value={GraphType.MONTH}
            checked={props.graphType === GraphType.MONTH}
            onChange={event => props.setTaxPayerType(event.target.value)}
          />
          <MoneyInput value={incomePerMonth} onChange={this.onChangeIncomePerMonth.bind(this)} /> / měsíc
        </p>
        <p>
        <input
            type="radio"
            name="graphType"
            value={GraphType.DAY}
            checked={props.graphType === GraphType.DAY}
            onChange={event => props.setTaxPayerType(event.target.value)}
          />
          <MoneyInput value={incomePerDay} onChange={this.onChangeIncomePerDay.bind(this)} /> / den
          </p>
        <p>
        <input
            type="radio"
            name="graphType"
            value={GraphType.HOUR}
            checked={props.graphType === GraphType.HOUR}
            onChange={event => props.setTaxPayerType(event.target.value)}
          />
          <MoneyInput value={incomePerHour} onChange={this.onChangeIncomePerHour.bind(this)} /> / hodina
        </p>
      </div>
    );
  }
}

IncomeInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};


export default IncomeInput;
