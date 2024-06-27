import { debugStyles } from '@src/shared/consts/debug';
import { getImageSize } from '@src/shared/lib/image/getImageSize';
import { ImageSize } from '@src/shared/lib/image/types';
import React, { useState } from 'react';
import { Image as RNImage, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

interface ItemImageProps {
  uri: string;
}

export const Image = ({ uri }: ItemImageProps) => {
  const [size, setSize] = useState<ImageSize>({ width: 0, height: 0 });

  getImageSize(uri).then(setSize);

  return (
    <FastImage
      source={{ uri }}
      style={{ ...size, ...styles.img }}
      resizeMode={FastImage.resizeMode.contain}
    />
    /* <RNImage
      style={{ ...size, ...styles.img }}
      source={{ uri, cache: 'force-cache' }}
      resizeMode="center"
    /> */
  );
};

const styles = StyleSheet.create({
  img: {
    ...debugStyles.blue,
    backgroundColor: 'red',
  },
});
//rm -rf .git/index.lock worked for me too.
//https://github.com/facebook/react-native/issues/33102
