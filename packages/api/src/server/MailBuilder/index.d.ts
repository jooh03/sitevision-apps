import { IMail } from '../Mail';

export interface IMailBuilder {
  addBlindCopyRecipient(aBlindCopyRecipientAddress: string): IMailBuilder;
  addCopyRecipient(aCopyRecipientAddress: string): IMailBuilder;
  addRecipient(aRecipientAddress: string): IMailBuilder;
  addReplyTo(aReplyToAddress: string): IMailBuilder;
  build() : IMail;
  clearAllRecipients(): IMailBuilder;
  clearBlindCopyRecipients(): IMailBuilder;
  clearCopyRecipients(): IMailBuilder;
  clearRecipients(): IMailBuilder;
  clearReplyTos(): IMailBuilder;
  setFrom(aFromAddress: string): IMailBuilder;
  setHtmlMessage(aHtmlMessage: string): IMailBuilder;
  setSubject(aSubject: string): IMailBuilder;
  setTextMessage(aTextMessage: string): IMailBuilder;
}