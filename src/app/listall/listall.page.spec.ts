import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListallPage } from './listall.page';

describe('ListallPage', () => {
  let component: ListallPage;
  let fixture: ComponentFixture<ListallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
