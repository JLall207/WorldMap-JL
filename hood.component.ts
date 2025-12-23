import { Component,AfterViewInit, NgModule, OnInit } from '@angular/core';
import { CountryInfoService } from '../../country-info.service';

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrl: './hood.component.css',
})

export class hoodComponent implements AfterViewInit{
  constructor(private countryInfoService: CountryInfoService){ }
  data: any;

  onClick(event: MouseEvent): void {
    const target = event.target as SVGPathElement;
    var countryId = target.getAttribute('id');
   
    if (countryId) {
      this.countryInfoService.getCountryInfo(countryId).subscribe(data =>{
        this.data = data;
        console.log('Data from Worldbank for ', countryId, 'is:', data);
        return data;
        
      })
    }
  }

  ngAfterViewInit(){ 
    document.addEventListener('click', (event) =>{
      this.onClick;
    });
  }

}

