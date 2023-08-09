class ClientSellService {
  constructor(private seasonDiscount: number, private fees: number) {

  }

  private getSeasonalDiscount() {
    return this.seasonDiscount
  }

  private getFees() {
    return this.fees
  }

  private discountedPrice(basePrice: number, discount: number, fees: number) {
    return (basePrice * (1-discount)) + fees
  }

  calculateFinalPrice(
    quantity: number, 
    itemPrice: number
  ) {
    const basePrice = quantity * itemPrice;
    const seasonDiscount = this.getSeasonalDiscount();
    const fees = this.getFees();
    const finalPrice = this.discountedPrice(
      basePrice, 
      seasonDiscount, 
      fees
    );
    return finalPrice;
  }

}
