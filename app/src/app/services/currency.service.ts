import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "../constants";
import { CurrencyResponseDto } from "../dto";

@Injectable()
export class CurrencyService {
  constructor(private httpClient: HttpClient) {}

  public fetchCurrencies(): Observable<CurrencyResponseDto> {
    return this.httpClient.get(API_URL) as Observable<CurrencyResponseDto>;
  }
}
