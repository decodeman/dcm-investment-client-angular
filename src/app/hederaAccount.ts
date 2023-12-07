export interface HederaAccount {
  account: string;
  memo: string;
  balance: HederaAccountBalance;
}

export interface HederaAccountBalance {
  balance: number;
  tokens: HederaToken[];
}

export interface HederaToken {
  token_id: string;
  balance: number;
  name: string;
  supply_type: string,
  symbol: string,
  total_supply: number,
  treasury_account_id: string,
  type: string
}