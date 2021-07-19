import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePocComponent } from './table-poc.component';

describe('TablePocComponent', () => {
  let component: TablePocComponent;
  let fixture: ComponentFixture<TablePocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
