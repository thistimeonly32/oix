import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiremanIntercomSystemComponent } from './fireman-intercom-system.component';

describe('FiremanIntercomSystemComponent', () => {
  let component: FiremanIntercomSystemComponent;
  let fixture: ComponentFixture<FiremanIntercomSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiremanIntercomSystemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiremanIntercomSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
