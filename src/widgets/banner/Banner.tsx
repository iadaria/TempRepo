import { BANNER } from 'mock/handlers/data/banner.data';
import { getImageSizeByRatio } from '@src/shared/lib/image/getRatio';
import { getImageSize } from '@src/shared/lib/image/getSize';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { Image } from 'react-native';

export const Banner = memo(() => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  //const banner = useSelector(selectBanner);
  const banner = BANNER;

  const getSize = useMemo(async () => {
    const imageSize = await getImageSize(banner.img);
    const imageSizeByRatio = getImageSizeByRatio(imageSize);
    return imageSizeByRatio;
  }, [banner.img]);

  useEffect(() => {
    getSize.then(setSize);
  }, []);

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
});
