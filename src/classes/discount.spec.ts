import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Product', () => {
  it('Should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('Should have fifity percent discount', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(50.5)).toBeCloseTo(25.25);
  });

  it('Should have fifity percent discount', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(100.9)).toBeCloseTo(90.81);
  });
});
