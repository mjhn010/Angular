import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciperItemComponent } from './reciper-item.component';

describe('ReciperItemComponent', () => {
  let component: ReciperItemComponent;
  let fixture: ComponentFixture<ReciperItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReciperItemComponent]
    });
    fixture = TestBed.createComponent(ReciperItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
