import { useState, useEffect, useMemo } from "react";
import {
  UnsplashImageDetails,
  UnsplashImage,
  UnsplashImageListResponse,
} from "../types/Images";
import { useFavouriteImageStorage } from "../state/useFavouriteImageStorage";

export const useUnslashPhotoList = () => {
  const [imageListData, setImageListData] = useState<UnsplashImage[]>([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { storedValue } = useFavouriteImageStorage("favouriteImageList");
  
  const apiKey = `${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos?page=1&per_page=50&query=nature&client_id=" + apiKey
    )
      .then((res) => res.json())
      .then(
        (result: UnsplashImageListResponse) => {
          setIsLoaded(true);
          setImageListData(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const parsedImagesList: UnsplashImage[] = useMemo(
    () => imageListData?.filter((item: any) => storedValue.includes(item.id)),
    [imageListData, storedValue]
  );

  return { imageListData, error, isLoaded, parsedImagesList };
};

export const useUnslashPhotoListID = (id: string) => {
  const [imageId, setImageId] = useState<string>(id);
  const [imageData, setImageData] = useState<UnsplashImageDetails>();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setImageId(id);
  }, [id]);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/" +
        imageId +
        "?client_id=B2Q6-ZNbLQEYPBbZHU4GuJS1L9PXV3QMIUjDs2oWo4Q"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setImageData(result as UnsplashImageDetails);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [imageId]);

  return { imageData, error, isLoaded };
};
