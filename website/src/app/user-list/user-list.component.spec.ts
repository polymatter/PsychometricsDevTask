import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';

const mockUsers = [
  {
    id: 10001,
    birth_date: '1953-09-02',
    first_name: 'Georgi',
    last_name: 'Facello',
    gender: 'M',
    created: '1986-06-26'
  },
  {
    id: 10002,
    birth_date: '1964-06-02',
    first_name: 'Bezalel',
    last_name: 'Simmel',
    gender: 'F',
    created: '1985-11-21'
  }
]

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display users', () => {
    const fixture = TestBed.createComponent(UserListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('td')?.textContent).toContain(mockUsers[0].id);
    expect(compiled.querySelector('td ~ td')?.textContent).toContain(mockUsers[0].birth_date);
    expect(compiled.querySelector('td ~ td ~ td')?.textContent).toContain(mockUsers[0].first_name);
    expect(compiled.querySelector('td ~ td ~ td ~ td')?.textContent).toContain(mockUsers[0].last_name);
    expect(compiled.querySelector('tr ~ tr > td')?.textContent).toContain(mockUsers[1].id);
    expect(compiled.querySelector('tr ~ tr > td ~ td')?.textContent).toContain(mockUsers[1].birth_date);
    expect(compiled.querySelector('tr ~ tr > td~ td ~ td')?.textContent).toContain(mockUsers[1].first_name);
    expect(compiled.querySelector('tr ~ tr > td ~ td ~ td ~ td')?.textContent).toContain(mockUsers[1].last_name);
  })
});
