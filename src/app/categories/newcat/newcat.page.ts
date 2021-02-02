import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/shared/interfaces';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-newcat',
  templateUrl: './newcat.page.html',
  styleUrls: ['./newcat.page.scss'],
})
export class NewcatPage implements OnInit {
  @ViewChild('input', { static: false }) inputRef: ElementRef

  isNew = true
  form: FormGroup;
  category: Category;
  image: File
  imagePreview=''
  



  constructor(
    private categoriesService: CategoriesService,
    private router: Router) { }


  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    let obs$
    this.form.disable()
    obs$ = this.categoriesService.create(this.form.value.name, this.image)
    obs$.subscribe(
      category => {
        this.category = category
        console.log('Изменения сохранены')
        this.form.enable()
      },
      error => {
        console.log(error.error.message)
        this.form.enable()
      }
    )
  }
}
