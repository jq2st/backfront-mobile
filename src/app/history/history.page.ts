import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrdersService } from '../shared/services/orders.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  // @ViewChild('tooltip', { static: false }) tooltipRef: ElementRef

  STEP = 15

  // tooltip: MaterialInstance
  isFilterVisible = false

  offset = 0
  limit = 2

  oSub: Subscription
  orders = []

  loading = false
  reloading = false

  noMoreOrders = false

  // filter: Filter = {}



  constructor(private ordersService: OrdersService) { }


  ngOnInit() {
    this.reloading = true
    this.fetch()
  }

  private fetch() {

    // const params = Object.assign({}, this.filter, {
    //   offset: this.offset,
    //   limit: this.STEP
    // })

    this.oSub = this.ordersService.fetch().subscribe(
      orders => {
        this.orders = this.orders.concat(orders)
        this.noMoreOrders = orders.length < this.STEP
        this.loading = false
        this.reloading = false
      }
    )
  }

  loadMore() {
    this.offset += this.STEP;
    this.loading = true
    this.fetch()
  }

  ngOnDestroy() {
    // this.tooltip.destroy()
    this.oSub.unsubscribe()
  }

  ngAfterViewInit() {
    // this.tooltip = MaterialService.initTooltip(this.tooltipRef)
  }

  applyFilter(filter) {
    this.orders = []
    this.offset = 0
    // this.filter = filter
    this.reloading = true
    this.fetch()

  }

  isFiltered() {
    // return Object.keys(this.filter).length !== 0
  }
}
