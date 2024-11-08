export interface ITransactionResponse {
  transaction_id: number;
  payment_date_time: string;
  transaction_status: number;
}

export interface ITransactionCreate {
  bill_id: number;
  transaction_id: number;
}