import { Category } from 'src/enums/category.enum';

export class Package {
  id: number;
  price: number;
  name: string;
  categories: Category;
}
