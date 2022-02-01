import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCarrinhoComponent } from './pagina-carrinho.component';

describe('PaginaCarrinhoComponent', () => {
  let component: PaginaCarrinhoComponent;
  let fixture: ComponentFixture<PaginaCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
