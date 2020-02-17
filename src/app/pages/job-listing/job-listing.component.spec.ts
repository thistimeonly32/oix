import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobListingComponent } from './job-listing.component';

describe('JobListingComponent', () => {
  let component: JobListingComponent;
  let fixture: ComponentFixture<JobListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobListingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
