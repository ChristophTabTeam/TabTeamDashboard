export interface InvoiceLine {
  id: number,
  number: number,
  serviceName: string,
  serviceNote: string,
  employee?: string,
  servicePrice: number,
  amount: number,
  linePrice: number
}
