import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Category } from 'src/app/shared/interfaces';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  @ViewChild('input', { static: false }) inputRef: ElementRef

  isNew = true
  form: FormGroup;
  category: Category;
  image: File
  imagePreview=''
  



  constructor(private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private router: Router) { }


  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required)
    });

    this.form.disable()

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew = false
              return this.categoriesService.getById(params['id'])
            }

            return of(null)
          }
        )
      )
      .subscribe(
        (category: Category) => {
          if (category) {
            this.category = category
            this.form.patchValue({
              name: category.name
            })
            this.imagePreview = category.imageSrc
            console.log(this.imagePreview +"prev")
            console.log(this.category.imageSrc + 'src')
          }
          this.form.enable()
        },
        error =>console.log(error.error.message)
      )
  }


  triggerClick() {
    this.inputRef.nativeElement.click()
  }

  onFileUpload(event: any) {
    const file = event.target.files[0]
    this.image = file

    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }
    reader.readAsDataURL(file)
  }

  deleteCategory() {
    const desigion = window.confirm(`Вы уверены, что хотите удалить категорию ${this.category.name}`)
    if (desigion) {
      this.categoriesService.delete(this.category._id).subscribe(
        response => { console.log(response.message) },
        error => { console.log(error.error.message) },
        () => this.router.navigate(['/categories'])
      )
    }
  }

  onSubmit() {
    let obs$
   console.log(this.image)
    this.form.disable()
    if (this.isNew) {
      //create
      obs$ = this.categoriesService.create(this.form.value.name, this.image)
   
    } else {
      obs$ = this.categoriesService.update(this.category._id, this.form.value.name, this.image)
    }

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
