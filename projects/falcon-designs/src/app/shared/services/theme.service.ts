import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from "@angular/common/http";
import { IThemeOption } from '../models/theme-options.model';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    private http: HttpClient,
  ) { }

  getThemeOptions(): Observable<Array<IThemeOption>> {
    return this.http.get<Array<IThemeOption>>("assets/options.json");
  }

  changeTheme(primary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
  }


}
