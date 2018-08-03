import { Injectable } from '@angular/core';
import { Compte } from '../domain/compte';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  private URL = 'http://localhost:5144/api/Comptes';
  constructor(private _http: HttpClient) { }

  getAllComptes(): Observable<Compte[]> {
    return this._http.get<Compte[]>(this.URL);
    // return [
      // {'numero': 'ssFake001', 'proprietaire': 'FakeProp1', 'solde': 1111},
      // {'numero': 'ssFake002', 'proprietaire': 'FakeProp2', 'solde': 2222},
      // {'numero': 'ssFake003', 'proprietaire': 'FakeProp3', 'solde': 3333},
      // les donnes dans la couche service
    // ];
  }
}
