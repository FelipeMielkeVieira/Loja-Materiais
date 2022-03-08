import { UtilitariosModule } from './utilitarios.module';

describe('UtilitariosModule', () => {
  let utilitariosModule: UtilitariosModule;

  beforeEach(() => {
    utilitariosModule = new UtilitariosModule();
  });

  it('should create an instance', () => {
    expect(utilitariosModule).toBeTruthy();
  });
});
