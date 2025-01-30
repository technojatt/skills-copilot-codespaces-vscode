import { Inventory } from '../models/inventory';
import { Item } from '../models/item';

describe('Inventory Class', () => {
  let inventory: Inventory;

  beforeEach(() => {
    inventory = new Inventory();
  });

  test('should add an item to the inventory', () => {
    const item = new Item('1', 'Test Item', 10, 5.99);
    inventory.addItem(item);
    expect(inventory.getTotalCount()).toBe(1);
  });

  test('should remove an item from the inventory', () => {
    const item = new Item('1', 'Test Item', 10, 5.99);
    inventory.addItem(item);
    inventory.removeItem('1');
    expect(inventory.getTotalCount()).toBe(0);
  });

  test('should return the total count of items', () => {
    const item1 = new Item('1', 'Test Item 1', 10, 5.99);
    const item2 = new Item('2', 'Test Item 2', 5, 3.49);
    inventory.addItem(item1);
    inventory.addItem(item2);
    expect(inventory.getTotalCount()).toBe(2);
  });
});