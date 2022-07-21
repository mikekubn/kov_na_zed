enum UnitOption {
  cm = 'cm',
  mm = 'mm',
  m = 'm',
}

export enum Tags {
  Novinka = 'Novinka',
  Tip = 'Tip',
}

export interface IProduct {
  filename: string;
  frontmatter: {
    name: string;
    dimensions: string;
    unit: UnitOption;
    price: number;
    stock: boolean;
    discount: boolean;
    tags: Tags[];
    perex: string;
  };
  content: string;
}
