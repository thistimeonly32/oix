import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VesdaSystemComponent } from './vesda-system.component';

describe('VesdaSystemComponent', () => {
  let component: VesdaSystemComponent;
  let fixture: ComponentFixture<VesdaSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesdaSystemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VesdaSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
