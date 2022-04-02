export interface InvoiceLine {
  position: number,
  number: number,
  serviceName: string,
  employee?: string,
  servicePrice: number,
  amount: number
}
