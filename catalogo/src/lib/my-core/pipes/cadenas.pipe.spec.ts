import { ElipsisPipe } from './cadenas.pipe';

describe('ElipsisPipe', () => {
  let pipe = new ElipsisPipe();
  beforeAll(() => {
    pipe = new ElipsisPipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  [
    { input: '1234567890', param: 4, output: '123\u2026' },
    { input: '1234', param: 4, output: '1234' },
    { input: '12345', param: 4, output: '123\u2026' },
    { input: '1234567890', param: -1, output: '1234567890' },
    { input: '', param: 0, output: '' },
    { input: '', param: 10, output: '' },
  ].forEach(caso => {
    it(`OK: '${caso.input}' (${caso.param})  -> '${caso.output}'`, () =>
      expect(pipe.transform(caso.input, caso.param)).toBe(caso.output));
  });

});
