import { Image } from 'react-native';
import { ImageSize } from './types';

export const getImageSize = function (uri: string) {
  return new Promise<ImageSize>((resolver, reject) =>
    Image.getSize(
      uri,
      (srcWidth, srcHeight) => {
        resolver({ srcWidth, srcHeight });
      },
      error => reject(error),
    ),
  );
};
