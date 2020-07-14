const faker = require("faker");

const TYPES_CONFIG = {
  integer: faker.random.number(),
  biginteger: faker.random.number(),
  float: faker.commerce.price(),
  decimal: faker.commerce.price(),
  date: faker.date.recent(),
  array: [faker.address.latitude(), faker.address.longitude()],
  email: faker.internet.email(),
  text: faker.lorem.paragraph(),
  password: faker.internet.password(),
  boolean: faker.random.boolean(),
  json: {},
  uid: faker.random.uuid(),
  string: {
    phone: faker.phone.phoneNumber(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    type: faker.lorem.word(),
  },
  // if an enum, return a function returns a random valid option
  enumeration: (values) => {
    values[Math.floor(Math.random() * values.length)];
  },
};

const RELATION_CONFIG = {
  'oneToMany': [],
  'manyToOne': {},
  'manyToMany': [], 
}

const generateFake = () => {};

function geenndata(type, name) {
  switch (type) {
    case "integer":
    case "biginteger":
      return faker.random.number();
    case "float":
    case "decimal":
      return faker.commerce.price();
    case "date":
      return faker.date.recent();
    case "string":
      switch (name) {
        case "phone":
          return faker.phone.phoneNumber();
        case "city":
          return faker.address.city();
        case "adress":
          return faker.address.streetAddress();
        case "type":
          return faker.lorem.word();
        default:
          return faker.name.findName();
      }
    case "array":
      return [faker.address.latitude(), faker.address.longitude()];
    case "email":
      return faker.internet.email();
    case "text":
      return faker.lorem.paragraph();
    case "password":
      return faker.internet.password();
    case "boolean":
      return faker.random.boolean();
    case "json":
      return {};
    default:
      return null;
  }
}
module.exports = {
  generateFake,
};
