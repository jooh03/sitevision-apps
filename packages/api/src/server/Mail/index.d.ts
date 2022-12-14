export interface IMail {
  send(): boolean;
  sendAsync(): void;
}