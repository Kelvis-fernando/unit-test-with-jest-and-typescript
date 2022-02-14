describe('Primitive values', () => {
  it('Should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).not.toBeNull();
    expect(number).toBeTruthy();
    expect(number).not.toBeFalsy();
    expect(number).toBeLessThan(11);

    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);
  });
});

describe('Checking Objects', () => {
  it('Should test jest assertions with objects', () => {
    const person = { name: 'Kelvis', age: 20 };
    const otherPerson = { ...person };

    expect(person).toEqual(otherPerson);
    expect(person).toHaveProperty('age', 20);
    expect(person).not.toHaveProperty('lastName');
    expect(person).not.toHaveProperty('lastName');

    expect(person.name).toBe('Kelvis');
  });
});
