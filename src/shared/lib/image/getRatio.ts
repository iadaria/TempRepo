import { HEIGHT, WIDTH } from '@src/shared/consts/dimentsions';
import { ImageSize } from './types';

export const getImageSizeByRatio = ({ srcWidth, srcHeight }: ImageSize) => {
  console.log({ WIDTH, HEIGHT });
  const ratio = Math.min((WIDTH - 25 * 2) / srcWidth, HEIGHT / srcHeight);
  return { width: srcWidth * ratio, height: srcHeight * ratio };
};
