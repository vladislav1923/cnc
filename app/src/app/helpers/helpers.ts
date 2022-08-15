import { CurrencyItemInterface } from "../interfaces";
import { CurrencyResponseDto } from "../dto";

const prepareCurrencies = (response: CurrencyResponseDto): CurrencyItemInterface[] => {
  const result: CurrencyItemInterface[] = [];

  for (const item in response.Valute) {
    const normalizedItem: CurrencyItemInterface = {
      id: response.Valute[item].ID,
      name: response.Valute[item].Name,
      value: Number(response.Valute[item].Value),
      char: response.Valute[item].CharCode,
    };
    result.push(normalizedItem);
  }

  return result;
}

export { prepareCurrencies };
