import { Component, OnInit } from '@angular/core';
import { Compte } from '../domain/compte';
import { ComptesService } from '../services/comptes.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  data: Compte[];

  constructor(private  _service: ComptesService) { }

  ngOnInit() {
    // this.data = [
    //   {'numero': 'Fake001', 'proprietaire': 'FakeProp1', 'solde': 1111},
    //   {'numero': 'Fake002', 'proprietaire': 'FakeProp2', 'solde': 2222},
    //   {'numero': 'Fake003', 'proprietaire': 'FakeProp3', 'solde': 3333},
    // ];//En dure
    this._service.getAllComptes().subscribe(
      res => this.data = res
    );
  }

}
