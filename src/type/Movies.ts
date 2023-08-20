type ThumbnailSize = {
  small: string;
  medium?: string;
  large: string;
};

export type MoviesType = {
  id: string;
  title:string;
  year: number;
  category: string;
  raitng: string;
  isTrending: boolean;
  thumbnail: {
    tranding: ThumbnailSize;
    regular: ThumbnailSize;
  };
};
