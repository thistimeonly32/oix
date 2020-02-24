import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaveJobComponent } from './save-job.component';

describe('SaveJobComponent', () => {
  let component: SaveJobComponent;
  let fixture: ComponentFixture<SaveJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveJobComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaveJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
