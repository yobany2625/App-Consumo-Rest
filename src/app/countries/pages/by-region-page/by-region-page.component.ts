import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Regions } from '../../interfaces/region.type';




@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Regions[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Regions;

  constructor(private countriesService: CountriesService){}
  seaechByCapital(term: Regions):void {
    this.selectedRegion = term;
    this.countriesService.searchRegion(term).subscribe(countries => {
      this.countries = countries;
    })
  }
}
