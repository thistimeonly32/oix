import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChecklistFireAlarmSystemComponent } from './checklist-fire-alarm-system.component';

describe('ChecklistFireAlarmSystemComponent', () => {
  let component: ChecklistFireAlarmSystemComponent;
  let fixture: ComponentFixture<ChecklistFireAlarmSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistFireAlarmSystemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistFireAlarmSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
