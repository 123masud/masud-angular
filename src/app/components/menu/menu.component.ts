import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    // nav_menu
    $(document).ready(function(){
      $(".toggle-wrap2").click(function(){
        $(".toggle-wrap2").toggleClass("active");
      });
    });
(() => {
  $('.toggle-wrap2').on('click', () => {
  // $(this.ngOnInitthis).addClass('active');
  $('.aside_title').animate({width: 'toggle'}, 200);
  });
  })();
  }
  ngOnInitthis(ngOnInitthis: any) {
    // throw new Error('Method not implemented.');
  }

}
