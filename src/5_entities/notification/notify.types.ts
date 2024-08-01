export enum NotifyType {
  Info = 'info',
  Warning = 'warning',
  Important = 'important',
}

export type Notification = {
  id: string;
  title: string;
  type: NotifyType;
  date: Date;
  isRead: Boolean;
};
