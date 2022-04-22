import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPagamentoComponent } from './select-pagamento.component';

describe('SelectPagamentoComponent', () => {
  let component: SelectPagamentoComponent;
  let fixture: ComponentFixture<SelectPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
