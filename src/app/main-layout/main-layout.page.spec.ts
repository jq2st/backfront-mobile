import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainLayoutPage } from './main-layout.page';

describe('MainLayoutPage', () => {
  let component: MainLayoutPage;
  let fixture: ComponentFixture<MainLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
