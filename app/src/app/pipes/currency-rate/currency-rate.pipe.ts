import {Pipe} from "@angular/core";

@Pipe({ name: 'currencyRate' })
export class CurrencyRatePipe {
  public transform(value: number, char: string) {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: char,
      minimumFractionDigits: 2,
    }).format(value);
  }
}
