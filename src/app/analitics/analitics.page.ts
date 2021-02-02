import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chart } from 'chart.js';
import { AnalyticsService } from '../shared/services/analytics.service';

@Component({
  selector: 'app-analitics',
  templateUrl: './analitics.page.html',
  styleUrls: ['./analitics.page.scss'],
})
export class AnaliticsPage implements OnInit {
  @ViewChild('gain', { static: false }) gainRef: ElementRef
  @ViewChild('order', { static: false }) orderRef: ElementRef

  aSub: Subscription
  average: number
  pending = true


  constructor(
    private service: AnalyticsService
    ) { }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const gainConfig: any = {
      label: 'Выручка',
      color: 'rgba(255,99,132)',
    }
    const orderConfig: any = {
      label: 'Заказы',
      color: 'rgba(54,162,235)',
    }

    this.aSub = this.service.getAnalytics().subscribe((data: any) => {
      this.average = data.average

      gainConfig.labels = data.chart.map(item => item.label)
      gainConfig.data = data.chart.map(item => item.gain)

      orderConfig.labels = data.chart.map(item => item.label )
      orderConfig.data = data.chart.map(item => item.order)


      const gainCtx = this.gainRef.nativeElement.getContext('2d')
      gainCtx.canvas.height = '300px'

      const orderCtx = this.orderRef.nativeElement.getContext('2d')
      orderCtx.canvas.height = '300px'

      new Chart(gainCtx, createChartConfig(gainConfig))
      new Chart(orderCtx, createChartConfig(orderConfig))

      this.pending = false
    })
  }


  ngOnDestroy() {
    if (this.aSub)
      this.aSub.unsubscribe()
  }

}

function createChartConfig({ labels, data, label, color }) {
  return {
    type: 'line',
    options: {
      responsive: true
    },
    data: {
      labels,
      datasets: [{
        label,data,
        borderColor: color,
        steppedLine: false,
        fill: false
      }]
    }
  }
}
