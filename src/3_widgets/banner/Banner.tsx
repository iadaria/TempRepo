import { BANNER } from 'mock/data/banner.data';
import { useAppDispatch } from '@src/1_app/hooks';
import { fetchBanner } from '@src/5_entities/shop/shop.services';
import { selectBanner } from '@src/5_entities/shop/shop.slice';
import { getImageSize } from '@src/6_shared/lib/image/getImageSize';
import { getImageSizeByRatio } from '@src/6_shared/lib/image/getRatio';
import React, { useEffect, useState } from 'react';
import { Image, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { log, logline } from '@src/6_shared/lib/debug/log';

export const Banner = () => {
  const dispatch = useAppDispatch();
  const [size, setSize] = useState({ width: 0, height: 0 });

  logline(Banner.name, 'render');

  //const banner = useSelector(selectBanner);
  const banner = BANNER;

  useEffect(() => {
    async function getSize() {
      const imageSize = await getImageSize(banner!.img);
      const imageSizeByRatio = getImageSizeByRatio(imageSize);
      return imageSizeByRatio;
    }
    if (banner) {
      getSize().then(setSize);
    }
  }, [banner]);

  useEffect(() => {
    //dispatch(fetchBanner());
  }, []);

  if (!banner?.img) {
    return false;
  }

  return (
    <Pressable onPress={() => log(Banner.name, 'Clicked Banner')}>
      <Image
        style={{ width: size.width, height: size.height }}
        resizeMode="cover"
        source={{ uri: banner.img }}
      />
    </Pressable>
  );
};
