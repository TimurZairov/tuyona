export type User = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type Banner = {
  id: number;
  photo: string;
  position: number;
  target_url: string;
};

export interface ICategory {
  category: {
    title: string;
    photo: string | null;
    icon: string | null;
    id: number;
  };
  food?: boolean;
}

export type WishList = {
  id: number;
  service: {
    id: number;
    partner: number;
    title: string;
    service_provider: {
      id: number;
      name: string;
      short_description: string;
    };
  };
  created_at: Date;
};
export type Category = {
  icon: string | null;
  id: number;
  photo: string | null;
  title: string;
};

export type Cart = {
  id: number;
  user: number;
  service: {
    id: number;
    service_provider: {
      id: number;
      name: string;
      short_description: string;
    };
    title: string;
  };
  count: string;
  price: string;
  price_with_discount: string;
  total: string;
  total_with_discount: string;
  is_quantitative: boolean;
};

export type Service = {
  id: number;
  service_provider: number;
  title: string;
  short_description: string;
  price: string;
  price_with_discount: string;
  position: number;
  is_quantitative: boolean;
  promotion: null;
  categories: [
    {
      id: number;
      title: string;
      icon: null;
      photo: null;
    },
  ];
  photos: [
    {
      id: number;
      photo: string;
    },
  ];
  in_wishlist: boolean;
};

// {
//   "id": 10,
//   "user": 5,
//   "service": {
//     "id": 30,
//     "service_provider": {
//       "id": 1,
//       "name": "Маруфжон Хужакулов",
//       "short_description": "Талантливый узбекский ведущий, известный своим обаянием, профессионализмом и способностью создавать уникальную атмосферу на любом мероприятии."
//     },
//     "title": "Профессиональное ведение выступлений"
//   },
//   "count": "1.00",
//   "price": "1000000.00",
//   "price_with_discount": "1000000.00",
//   "total": "1000000.00",
//   "total_with_discount": "1000000.00",
//   "is_quantitative": false
// }

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

// {
//   "id": 33,
//   "service_provider": 2,
//   "title": "Музыкальные Поздравления",
//   "short_description": "Персонализированные песни и музыкальные поздравления.",
//   "price": "800000.00",
//   "price_with_discount": "800000.00",
//   "position": 0,
//   "is_quantitative": true,
//   "promotion": null,
//   "categories": [
//     {
//       "id": 4,
//       "title": "Певцы",
//       "icon": null,
//       "photo": null
//     }
//   ],
//   "photos": [],
//   "in_wishlist": false
// }
