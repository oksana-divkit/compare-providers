export interface Price {
  priceValue: number;
  freeUp?: number;
}

export interface PriceOptions {
  [index: string]: Price;
}

export interface Provider {
  id: string;
  name: string;
  icon: string;
  minPaymentAmount?: number;
  maxPaymentAmount?: number;
  priceOfStorageGb: Price | PriceOptions;
  priceOfTransferGb: Price | PriceOptions;
  options?: {
    key: string;
    title: string;
    descr?: string;
  }[];
}
