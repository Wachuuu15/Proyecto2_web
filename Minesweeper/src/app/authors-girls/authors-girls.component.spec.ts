import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsGirlsComponent } from './authors-girls.component';

describe('AuthorsGirlsComponent', () => {
  let component: AuthorsGirlsComponent;
  let fixture: ComponentFixture<AuthorsGirlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsGirlsComponent]
    });
    fixture = TestBed.createComponent(AuthorsGirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
