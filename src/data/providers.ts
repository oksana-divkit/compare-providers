import type { Provider } from "../types";

export const providers: Provider[] = [
  {
    id: "0",
    name: "backblaze.com",
    icon: "",
    minPaymentAmount: 7,
    priceOfStorageGb: { price: 0.005 },
    priceOfTransferGb: { price: 0.01 },
  },
  {
    id: "2",
    name: "bunny.net",
    icon: "",
    maxPaymentAmount: 10,
    priceOfStorageGb: { 
      hdd: { price: 0.01 },  
      ssd: { price: 0.02 } 
    },
    priceOfTransferGb: { price: 0.01 },
    options: [
      { key: "hdd", title: "HDD" },
      { key: "ssd", title: "SSD" },
    ],
  },
  {
    id: "3",
    name: "scaleway.com",
    icon: "",
    priceOfStorageGb: {
      multi: { price: 0.06, freeUp: 75 },
      single: { price: 0.03, freeUp: 75 } 
    },
    priceOfTransferGb: { price: 0.02, freeUp: 75 },
    options: [
      { key: "multi", title: "Multi" },
      { key: "single", title: "Single" },
    ],
  },
  {
    id: "4",
    name: "vultr.com",
    icon: "",
    minPaymentAmount: 5,
    priceOfStorageGb: { price: 0.01 },
    priceOfTransferGb: { price: 0.01 },
  },
];
