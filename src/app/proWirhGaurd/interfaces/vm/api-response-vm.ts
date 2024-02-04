import { InterfaceProducts } from 'src/app/smallProject/models/interface-products';

export interface ApiResponseVm {
  message: string;
  data: any;
  success: boolean;
  PageNumbe?: number;
  itemPerPage?: number;
  // data:InterfaceProducts |InterfaceProducts[],
}
