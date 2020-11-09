import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LevelSelectPage } from './level-select.page';

describe('LevelSelectPage', () => {
  let component: LevelSelectPage;
  let fixture: ComponentFixture<LevelSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
