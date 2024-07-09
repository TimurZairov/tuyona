export type User = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type WishList = {
  id: number;
  service: {
    id: number;
    partner: number;
    title: string;
  };
  created_at: Date;
};

export type Cart = {
  id: number;
  user: number;
  service: {
    id: number;
    service_provider: number;
    title: string;
    count: string;
    price: string;
    price_with_discount: string;
    total: string;
    total_with_discount: string;
    is_quantitative: boolean;
  };
};

// {
//   "id": 0,
//   "user": 0,
//   "service": {
//     "id": 0,
//     "service_provider": 0,
//     "title": "string"
//   },
//   "count": "-150165189409441",
//   "price": "-25005709",
//   "price_with_discount": "7482921462.2",
//   "total": "-.66",
//   "total_with_discount": "9150812887585.",
//   "is_quantitative": true
// }
