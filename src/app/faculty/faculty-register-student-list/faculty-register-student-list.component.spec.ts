import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyRegisterStudentListComponent } from './faculty-register-student-list.component';

describe('FacultyRegisterStudentListComponent', () => {
  let component: FacultyRegisterStudentListComponent;
  let fixture: ComponentFixture<FacultyRegisterStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyRegisterStudentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyRegisterStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
