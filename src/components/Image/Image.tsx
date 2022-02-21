import React, { useMemo } from "react";
import { Img, Figure, Figcaption } from "./Image.style";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { useFavouriteImageStorage } from "../../state/useFavouriteImageStorage";

interface ImageProps {
  url: string;
  description: string;
  handleClick: () => void;
  id: string;
}

export default function Image({
  url,
  description,
  handleClick,
  id,
}: ImageProps) {
  const { storedValue } = useFavouriteImageStorage("favouriteImageList");

  const isFavourite: boolean = useMemo(() => {
    return storedValue.includes(id);
  }, [storedValue, id]);

  return (
    <Figure onClick={handleClick}>
      <Img src={url} alt={description} />
      {isFavourite && (
        <Figcaption>
          <Heart />
        </Figcaption>
      )}
    </Figure>
  );
}
