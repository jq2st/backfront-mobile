import { PositionService } from './../../../shared/services/positions.service';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Position } from 'src/app/shared/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-positons',
  templateUrl: './positons.component.html',
  styleUrls: ['./positons.component.scss']
})
export class PositonsComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input('categoryId') categoryId: string
  @ViewChild('modal', { static: false }) modalRef: ElementRef

  positions: Position[] = []
  loading = false
  form: FormGroup
  positonId = null

  constructor(private positionService: PositionService) { }

  ngOnInit() {
    this.loading = true;
    this.positionService.fetch(this.categoryId).subscribe(
      positions => {
        this.positions = positions
        this.loading = false
      }
    )

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      cost: new FormControl(1, [Validators.required, Validators.min(1)])
    })
  }

  ngOnDestroy() {
    
  }

  ngAfterViewInit() {

  }

  onSelectPosition(position: Position) {
    this.positonId = position._id
    this.form.patchValue({
      name: position.name,
      cost: position.cost
    })
  }

  onAddPosition() {
    this.positonId = null
    this.form.reset({
      name: null,
      cost: 1
    })
  }


  onCancel() {
  }

  onSubmit() {
    this.form.disable()

    const newPosition: Position = {
      name: this.form.value.name,
      cost: this.form.value.cost,
      category: this.categoryId
    }

    const complited = () => {
      this.form.reset({ name: '', cost: 1 })
      this.form.enable()
    }

    if (this.positonId) {
      newPosition._id = this.positonId
      this.positionService.update(newPosition).subscribe(
        pos => {
          const ind = this.positions.findIndex(p => p._id === pos._id)
          this.positions[ind] = pos
        },
        error => {
        },
        () => { complited() }
      )
    }

    else {
      this.positionService.create(newPosition).subscribe(
        pos => {
          this.positions.push(pos)
        },
        error => {
        },
        () => { complited() }
      )
    }

  }

  onDeletePosition(event:Event, position: Position) {
    event.stopPropagation()
    this.positionService.delete(position).subscribe(
      response => {
        const indx = this.positions.findIndex(p => p._id === position._id)
        this.positions.splice(indx, 1)
      }
    )
  }


}
