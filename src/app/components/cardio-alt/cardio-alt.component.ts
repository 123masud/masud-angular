import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-cardio-alt',
  templateUrl: './cardio-alt.component.html',
  styleUrls: ['./cardio-alt.component.css']
})
export class CardioAltComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("[data-slider]")
  .bind("slider:ready slider:changed",  (_event: any, data: { value: number; }) => {
    $(this).nextAll("span").html(data.value.toFixed(3));
  });
  }

}
