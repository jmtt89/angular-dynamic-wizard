import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockEComponent } from './block-e.component';

describe('BlockEComponent', () => {
  let component: BlockEComponent;
  let fixture: ComponentFixture<BlockEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
