class Inventory {
  List<Item> items = [];

  void addItem(Item item) {
    items.add(item);
  }

  void removeItem(String itemId) {
    items.removeWhere((item) => item.id == itemId);
  }

  int getTotalCount() {
    return items.length;
  }
}

class Item {
  String id;
  String name;
  int quantity;
  double price;

  Item(this.id, this.name, this.quantity, this.price);

  void updateQuantity(int newQuantity) {
    quantity = newQuantity;
  }
}