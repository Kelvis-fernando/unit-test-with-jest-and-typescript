import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  it('Should have properties name and price', () => {
    const sut = createSut('Camisa', 20.9);
    expect(sut).toHaveProperty('name', 'Camisa');
    expect(sut).toHaveProperty('price', 20.9);
    expect(sut.price).toBeCloseTo(20.9);
  });
});
