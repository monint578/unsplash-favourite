import React, { FunctionComponent, useCallback, useMemo } from "react";
import {
  Container,
  ImageContainer,
  ContentContainer,
  Info,
  Exif,
} from "./ImageDetailsDialog.style";
import { ReactComponent as Heart } from "../../../assets/heart.svg";
import { ReactComponent as Download } from "../../../assets/download.svg";
import { ReactComponent as View } from "../../../assets/view.svg";
import Button from "../../../components/Button/Button";
import { Flex, Divider } from "../../../theme/GlobalComponents.style";
import { useUnslashPhotoListID } from "../../../api/api";
import Loader from "../../../components/Loader/Loader";
import { useFavouriteImageStorage } from "../../../state/useFavouriteImageStorage";

interface ImageDetailsDialogProps {
  id: string;
}

export const ImageDetailsDialog: FunctionComponent<ImageDetailsDialogProps> = ({
  id,
}) => {
  const { imageData, isLoaded, error } = useUnslashPhotoListID(id);
  const { storedValue, appendValue, removeValue } =
    useFavouriteImageStorage("favouriteImageList");

  const isFavourite: boolean = useMemo(() => {
    return storedValue.includes(id);
  }, [storedValue, id]);

  const handleClick = useCallback(() => {
    if (isFavourite) {
      removeValue(id);
    } else {
      appendValue(id);
    }
  }, [id, isFavourite, appendValue, removeValue]);

  if (imageData === undefined || !isLoaded || error) return <Loader />;

  return (
    <React.Fragment>
      <Container>
        <ImageContainer>
          <img src={imageData?.urls.small} alt={imageData?.alt_description} />
        </ImageContainer>
        <ContentContainer>
          <div>
            <Flex className="justify-space-between margin-bottom">
              <div>
                <small>author</small>
                <h1>{imageData?.user.name}</h1>
              </div>
              <Button
                onClick={() => handleClick()}
                variant={isFavourite ? "contained" : "text"}
                type="button"
              >
                <Heart />
              </Button>
            </Flex>
            <div className="margin-bottom">
              <small>description</small>
              <h2>{imageData.description ? imageData.description : "-"}</h2>
            </div>
          </div>
          <div>
            <Flex className="justify-space-between">
              <Info>
                <Heart />
                <p>{imageData.likes ? imageData.likes : "-"}</p>
              </Info>
              <Info>
                <Download />
                <p>{imageData.downloads ? imageData.downloads : "-"}</p>
              </Info>
              <Info>
                <View />
                <p>{imageData.views ? imageData.views : "-"}</p>
              </Info>
            </Flex>
            <Divider marginx="25px" />
            <Exif>
              <div>
                <small>Camera Make</small>
                <p>{imageData.exif.make ? imageData.exif.make : "-"}</p>
              </div>
              <div>
                <small>Camera Model</small>
                <p>{imageData.exif.model ? imageData.exif.model : "-"}</p>
              </div>
              <div>
                <small>Focal Length</small>
                <p>
                  {imageData.exif.focal_length
                    ? imageData.exif.focal_length
                    : "-"}
                </p>
              </div>
              <div>
                <small>Dimensions</small>
                <p>
                  {imageData?.width} x {imageData?.height}
                </p>
              </div>
            </Exif>
          </div>
        </ContentContainer>
      </Container>
    </React.Fragment>
  );
};
