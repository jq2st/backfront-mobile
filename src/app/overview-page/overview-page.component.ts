import { MaterialService } from './../shared/clasess/meterial.service';
import { Observable } from 'rxjs';
import { AnalyticsService } from './../shared/services/analytics.service';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { OverviewPage } from '../shared/interfaces';
import { MaterialInstance } from '../shared/clasess/meterial.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('tapTarget', { static: false }) tapTargetRef: ElementRef

  data$: Observable<OverviewPage>
  tapTarget: MaterialInstance
  yesterday = new Date()

  constructor(private service: AnalyticsService) { }

  ngOnInit() {
    this.data$ = this.service.getOverview()

    this.yesterday.setDate(this.yesterday.getDate() - 1)
  }

  ngOnDestroy() {
    this.tapTarget.destroy()

  }
  ngAfterViewInit() {
    this.tapTarget = MaterialService.initTapTarget(this.tapTargetRef)
  }

  openInfo() {
    this.tapTarget.open()
  }

}
