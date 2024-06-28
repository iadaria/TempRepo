import { Image } from 'react-native';
import { ImageSize } from './types';

export const getImageSize = function (uri: string) {
  return new Promise<ImageSize>((resolver, reject) =>
    Image.getSize(
      uri,
      (width, height) => {
        resolver({ width, height });
      },
      error => reject(error),
    ),
  );
};
