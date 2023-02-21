export interface Price {
  price: number;
  freeUp?: number;
}

export interface PriceOption {
  [index: string]: Price;
}

export interface Provider {
  id: string;
  name: string;
  icon: string;
  minPaymentAmount?: number;
  maxPaymentAmount?: number;
  priceOfStorageGb: Price | PriceOption[];
  priceOfTransferGb: Price | PriceOption[];
  options?: {
    key: string;
    title: string;
    descr?: string;
  }[];
}

export interface ProvidersTotal {
  [index: string]: {
    currentOption: Ref<string>;
    total: Ref<number>;
  };
}
