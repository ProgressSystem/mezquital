import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() {
    $(document).ready(function() {
      $('.open-menu').on('click', function() {
        $('.overlay').addClass('open');
      });

      $('.close-menu').on('click', function() {
        $('.overlay').removeClass('open');
      });
    });
  }

  ngOnInit() {
  }

}
