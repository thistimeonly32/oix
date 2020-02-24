import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SprinklerHosereelSystemIonComponent } from './sprinkler-hosereel-system-ion.component';

describe('SprinklerHosereelSystemIonComponent', () => {
  let component: SprinklerHosereelSystemIonComponent;
  let fixture: ComponentFixture<SprinklerHosereelSystemIonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprinklerHosereelSystemIonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SprinklerHosereelSystemIonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
