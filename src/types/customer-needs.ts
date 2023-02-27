export interface CustomerNeeds {
  [index: string]: {
    title: string,
    range: {
      min: number,
      max: number,
    },
    current: number
  }
};
