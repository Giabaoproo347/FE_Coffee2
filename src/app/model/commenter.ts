import {Product} from './product.model';
import {User} from './user.model';

export interface Commenter {
  id?: number;
  content?: string;
  date?: string;
  edit?: string;
  product?: Product;
  user?: User;
  productId?: string;
}
