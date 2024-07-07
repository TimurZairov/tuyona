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
