import { LojaModule } from './loja.module';

describe('LojaModule', () => {
  let lojaModule: LojaModule;

  beforeEach(() => {
    lojaModule = new LojaModule();
  });

  it('should create an instance', () => {
    expect(lojaModule).toBeTruthy();
  });
});
