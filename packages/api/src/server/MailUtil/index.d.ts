import { IMailBuilder } from '../MailBuilder';

export function getMailBuilder(): IMailBuilder;
export function getServerFromAddress(): boolean;
export function getServerResponsibleAddress(): string;
export function getSiteFromAddress(): string;
export function getSiteResponsibleAddress(): string;
export function isValidAddress(aMailAddress: string): boolean;

declare namespace mailUtil {
  export {
    getMailBuilder,
    getServerFromAddress,
    getServerResponsibleAddress,
    getSiteFromAddress,
    getSiteResponsibleAddress,
    isValidAddress,
  };
}

export default mailUtil;