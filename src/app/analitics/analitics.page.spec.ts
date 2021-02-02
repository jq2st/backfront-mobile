import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnaliticsPage } from './analitics.page';

describe('AnaliticsPage', () => {
  let component: AnaliticsPage;
  let fixture: ComponentFixture<AnaliticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliticsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
