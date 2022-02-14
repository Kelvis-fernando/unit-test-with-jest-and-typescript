import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('Should verify all the property', () => {
    const sut = createIndividualCustomer(
      'Kelvis',
      'Fernando',
      '111.222.333-44',
    );
    expect(sut).toHaveProperty('firstName', 'Kelvis');
    expect(sut).toHaveProperty('lastName', 'Fernando');
    expect(sut).toHaveProperty('cpf', '111.222.333-44');
  });

  it('Should retur a string with first name and last name', () => {
    const sut = createIndividualCustomer(
      'Kelvis',
      'Fernando',
      '111.222.333-44',
    );

    expect(sut.getName()).toBe('Kelvis Fernando');
  });

  it('Should return a string with cpf', () => {
    const sut = createIndividualCustomer(
      'Kelvis',
      'Fernando',
      '111.222.333-44',
    );
    expect(sut.getIDN()).toBe('111.222.333-44');
  });
});

describe('EnterpriseCustomer', () => {
  it('Should verify the properties', () => {
    const sut = createEnterpriseCustomer('Meteor', '1234');
    expect(sut).toHaveProperty('name', 'Meteor');
    expect(sut).toHaveProperty('cnpj', '1234');
  });

  it('Should return the name enterprise', () => {
    const sut = createEnterpriseCustomer('Meteor', '1234');
    expect(sut.getName()).toBe('Meteor');
  });

  it('Should return cnpj of enterprise', () => {
    const sut = createEnterpriseCustomer('Meteor', '1234');
    expect(sut.getIDN()).toBe('1234');
  });
});
