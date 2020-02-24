import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HosFireExtSystemComponent } from './hos-fire-ext-system.component';

describe('HosFireExtSystemComponent', () => {
  let component: HosFireExtSystemComponent;
  let fixture: ComponentFixture<HosFireExtSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HosFireExtSystemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HosFireExtSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
