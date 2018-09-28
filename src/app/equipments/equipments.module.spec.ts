import { EquipmentsModule } from './equipments.module';

describe('EquipmentsModule', () => {
  let equipmentsModule: EquipmentsModule;

  beforeEach(() => {
    equipmentsModule = new EquipmentsModule();
  });

  it('should create an instance', () => {
    expect(equipmentsModule).toBeTruthy();
  });
});
