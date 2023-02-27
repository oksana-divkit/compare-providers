import type { CustomerNeeds } from "@/types/customer-needs"

export const customerNeedsData: CustomerNeeds = {
  storage: {
    title: 'Storage:',
    range: {
      min: 0,
      max: 1000,
    },
    current: 100
  },
  transfer: {
    title: 'Transfer:',
    range: {
      min: 0,
      max: 1000,
    },
    current: 100
  }
};
