import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUserRowComponent } from './add-new-user-row.component';

describe('AddNewUserRowComponent', () => {
  let component: AddNewUserRowComponent;
  let fixture: ComponentFixture<AddNewUserRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewUserRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewUserRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
