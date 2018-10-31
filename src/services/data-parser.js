import CurrencyInfo from './../data/currency-info.json'
export const gaugeParser = (d) => {
  let currencyString = '';
  console.log('dxx ', d);
  if (d.format === 'currency') {
    currencyString = CurrencyInfo[d.unit].symbol;
  }
  d.minCopy = currencyString + d.min;
  d.maxCopy = currencyString + d.max;
  return d;
}