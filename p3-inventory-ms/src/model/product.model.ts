export class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number
  ) {
  }

  static defaultProduct(): Product {
    return new Product(
      "", "", "", [], 0
    );
  }
}
