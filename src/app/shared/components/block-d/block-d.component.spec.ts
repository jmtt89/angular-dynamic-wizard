import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDComponent } from './block-d.component';

describe('BlockDComponent', () => {
  let component: BlockDComponent;
  let fixture: ComponentFixture<BlockDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
