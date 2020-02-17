import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobViewComponent } from './job-view.component';

describe('JobViewComponent', () => {
  let component: JobViewComponent;
  let fixture: ComponentFixture<JobViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobViewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
