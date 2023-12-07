import { HederaToken } from "./hederaAccount";

export interface Investor {
  name: string;
  account: string;
  tokens: HederaToken[];
}