export interface Orders {
    id: number;
    date: Date;
    client: string;
    total: number; // Total de la orden
    product?: any[];
  }
  