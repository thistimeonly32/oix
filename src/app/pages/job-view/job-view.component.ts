import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.scss'],
})
export class JobViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.className = "hold-transition sidebar-mini layout-footer-fixed layout-navbar-fixed";
  }

}
