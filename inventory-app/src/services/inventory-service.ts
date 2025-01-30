import { Inventory } from '../models/inventory';

export class InventoryService {
    private inventory: Inventory;

    constructor() {
        this.inventory = new Inventory();
    }

    createInventory(): Inventory {
        this.inventory = new Inventory();
        return this.inventory;
    }

    getInventory(): Inventory {
        return this.inventory;
    }

    updateInventory(inventory: Inventory): void {
        this.inventory = inventory;
    }
}