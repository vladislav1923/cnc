import {Pipe} from "@angular/core";

@Pipe({
  name: 'rubles'
})
export class RublesPipe {
  public transform(value: string) {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 2,
    }).format(Number(value));
  }
}
