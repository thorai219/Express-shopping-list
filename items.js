const items = require("./fakeDb")

class Item{
  constructor(name, price) {
    this.name = name;
    this.price = price;

    items.push(this)
  }

  static dbAll() {
    return items;
  }

  static dbUpdate(name, data) {
    let item = Item.dbQuery(name);
    if (item === undefined) {
      throw {
        message: "Not Found",
        status: 404
      }
    }
    item.name = data.name;
    item.price = data.price;
    return item;
  }

  static dbQuery(name) {
    const item = items.find(i => i.name === name);
    if (item === undefined) {
      throw{
        message: "Not Found",
        status: 404
      }
    }
    return item;
  }

  static dbDelete(name) {
    const itemIdx = items.findIndex(i => i.name === name);
    if(itemIdx === -1) {
      throw {
        message: "Not Found",
        status: 404
      }
    }
    items.splice(itemIdx, 1);
  }
}

module.exports = Item;