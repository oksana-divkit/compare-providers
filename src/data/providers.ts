import type { Provider } from "@/components/providers-chart/types";

export const providers: Provider[] = [
  {
    id: "1",
    name: "backblaze.com",
    icon: "",
    minPaymentAmount: 7,
    priceOfStorageGb: { priceValue: 0.005 },
    priceOfTransferGb: { priceValue: 0.01 },
  },
  {
    id: "2",
    name: "bunny.net",
    icon: "",
    maxPaymentAmount: 10,
    priceOfStorageGb: { 
      hdd: { priceValue: 0.01 },  
      ssd: { priceValue: 0.02 } 
    },
    priceOfTransferGb: { priceValue: 0.01 },
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
      multi: { priceValue: 0.06, freeUp: 75 },
      single: { priceValue: 0.03, freeUp: 75 } 
    },
    priceOfTransferGb: { priceValue: 0.02, freeUp: 75 },
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
    priceOfStorageGb: { priceValue: 0.01 },
    priceOfTransferGb: { priceValue: 0.01 },
  },
];
