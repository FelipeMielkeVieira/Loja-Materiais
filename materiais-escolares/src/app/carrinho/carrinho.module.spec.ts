import { CarrinhoModule } from './carrinho.module';

describe('CarrinhoModule', () => {
  let carrinhoModule: CarrinhoModule;

  beforeEach(() => {
    carrinhoModule = new CarrinhoModule();
  });

  it('should create an instance', () => {
    expect(carrinhoModule).toBeTruthy();
  });
});
