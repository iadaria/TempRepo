import { debugStyles } from '@src/shared/consts/debug';
import { log } from '@src/shared/lib/debug/log';
import { getImageSize } from '@src/shared/lib/image/getImageSize';
import { ImageSize } from '@src/shared/lib/image/types';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

interface ItemImageProps {
  uri: string;
}

export const AppImage = ({ uri }: ItemImageProps) => {
  const [size, setSize] = useState<ImageSize>({ width: 0, height: 0 });

  useEffect(() => {
    getImageSize(uri).then(setSize);
    log(AppImage.name, 'render' + uri);
  }, []);

  return (
    <FastImage
      source={{ uri }}
      style={{ ...size, ...styles.img }}
      resizeMode={FastImage.resizeMode.contain}
    />
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
