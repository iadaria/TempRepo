import { getImageSize } from '@src/shared/lib/image/getImageSize';
import { ImageSize } from '@src/shared/lib/image/types';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';

interface AppImageProps {
  uri: string;
}

export const AppImage = ({ uri }: AppImageProps) => {
  const [size, setSize] = useState<ImageSize>({ width: 0, height: 0 });

  useEffect(() => {
    getImageSize(uri).then(setSize);
  }, []);

  return (
    <Image source={{ uri, cache: 'only-if-cached' }} style={{ ...size }} />
    // <FastImage
    //   source={{ uri }}
    //   style={{ ...size, ...styles.img }}
    //   resizeMode={FastImage.resizeMode.contain}
    // />
  );
};

const styles = StyleSheet.create({
  img: {
    //...debugStyles.blue,
    //backgroundColor: 'red',
  },
});
//rm -rf .git/index.lock worked for me too.
//https://github.com/facebook/react-native/issues/33102
