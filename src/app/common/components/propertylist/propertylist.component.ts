import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.scss']
})
export class PropertylistComponent implements OnInit {

  constructor(
    private commonService: CommonService
  ) { }

  @Input('listType') listType: string;

  propertyList;

  getPropertyList(params){
    this.commonService.propertyList(params)
      .subscribe(result => {
        console.log(result);
        this.propertyList = result;
        
      })
  }

  ngOnInit() {
    this.getPropertyList(this.listType);
  }



}