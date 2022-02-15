import { ShoppingCart } from './shopping-cart';
import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';

afterEach(() => jest.clearAllMocks());

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItem('Camiseta', 20);
  const cartItem2 = createCartItem('Bolsa', 40);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return { sut, discountMock };
};

describe('ShoppingCart', () => {
  it('Should be an ampty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('Should have 2 cart items', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('Should teste total and total with discount', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(60);
    expect(sut.totalWithDicount()).toBe(60);
  });

  it('Should add products and clear cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('Should remove item', () => {
    const { sut } = createSutWithProducts();
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
  });

  it('Should call discount.calculate(price) when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDicount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call discount.calculate(price) with total price when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDicount();
    expect(discountMockSpy).toBeCalledWith(sut.total());
  });
});
