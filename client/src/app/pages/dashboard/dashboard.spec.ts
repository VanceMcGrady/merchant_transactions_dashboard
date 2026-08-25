import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Dashboard } from './dashboard';
import { environment } from '../../../environments/environment';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    httpMock.expectOne(`${environment.apiUrl}/merchants`).flush([]);
    expect(component).toBeTruthy();
  });

  it('should render the dashboard heading', () => {
    httpMock.expectOne(`${environment.apiUrl}/merchants`).flush([]);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Merchant Transactions Dashboard',
    );
  });

  it('should render a merchant returned by the API', async () => {
    httpMock.expectOne(`${environment.apiUrl}/merchants`).flush([
      { id: 1, name: 'Blue Bottle Coffee', category: 'Food & Beverage', city: 'Oakland', state: 'CA', email: 'a@b.com', createdAt: '2023-01-15T00:00:00.000Z' },
    ]);
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.merchant-list li strong')?.textContent).toContain(
      'Blue Bottle Coffee',
    );
  });
});
