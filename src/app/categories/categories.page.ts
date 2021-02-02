import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../shared/interfaces';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories$: Observable<Category[]>

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {

    this.categories$ = this.categoriesService.fetch()
  }
}
