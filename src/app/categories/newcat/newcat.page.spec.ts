import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewcatPage } from './newcat.page';

describe('NewcatPage', () => {
  let component: NewcatPage;
  let fixture: ComponentFixture<NewcatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewcatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
