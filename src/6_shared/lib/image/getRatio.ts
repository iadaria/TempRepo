import { HEIGHT, WIDTH } from '@src/6_shared/consts/dimentsions';
import { ImageSize } from './types';

export const getImageSizeByRatio = ({ width, height }: ImageSize) => {
  //console.log({ WIDTH, HEIGHT });
  const ratio = Math.min((WIDTH - 25 * 2) / width, HEIGHT / height);
  return { width: width * ratio, height: height * ratio };
};
