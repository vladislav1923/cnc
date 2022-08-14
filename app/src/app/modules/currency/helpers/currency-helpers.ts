import {CurrencyItemInterface, CurrencyListInterface, CurrencyResponseInterface} from "../interfaces";

const prepareCurrencies = (response: CurrencyResponseInterface): CurrencyItemInterface[] => {
  const result: CurrencyItemInterface[] = [];

  for (const item in response.Valute) {
    result.push(response.Valute[item]);
  }

  return result;
}

export { prepareCurrencies };
