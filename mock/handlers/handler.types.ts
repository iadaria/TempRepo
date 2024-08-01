import { DefaultBodyType, StrictRequest } from 'msw';
export interface ResolverProps {
  request: {
    userId: number;
    _bodyText: string;
  } & StrictRequest<DefaultBodyType>;
}
