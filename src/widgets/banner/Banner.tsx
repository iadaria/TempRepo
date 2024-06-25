import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BANNER } from '@src/mock/handlers/data/banner.data';
import { getImageSize } from '@src/shared/lib/image/getSize';
import { getImageSizeByRatio } from '@src/shared/lib/image/getRatio';

export const Banner = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  //const banner = useSelector(selectBanner);
  const banner = BANNER;

  useEffect(() => {
    getSize(banner.img);
  }, [banner]);

  const getSize = async (uri: string) => {
    const imageSize = await getImageSize(uri);
    const imageSizeByRatio = getImageSizeByRatio(imageSize);
    setSize(imageSizeByRatio);
  };

  if (!banner?.img) {
    return false;
  }

  return (
    <Image
      style={{ width: size.width, height: size.height }}
      resizeMode="cover"
      source={{ uri: banner.img }}
    />
  );
};
