import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEnderecoComponent } from './select-endereco.component';

describe('SelectEnderecoComponent', () => {
  let component: SelectEnderecoComponent;
  let fixture: ComponentFixture<SelectEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
