import { GenericHandlerService } from './generic-handler.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/config/config';

@Injectable({
  providedIn: 'root',
})
export class FormsTestService {
  urlLink = AppConfig.apiUrl_Json_Server;
  constructor(
    private _HttpClient: HttpClient,
    private _GenericHandlerService: GenericHandlerService
  ) {}

  addTemplateFormInputs(obj: any) {
    return this._GenericHandlerService.addProductsUsingGeneric(
      `${this.urlLink}templateForms`,
      obj
    );
  }

  addReactiveFormInputs(obj: any) {
    return this._GenericHandlerService.addProductsUsingGeneric(
      `${this.urlLink}reactiveForms`,
      obj
    );
  }
}
