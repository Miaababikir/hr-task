export interface Column {
  id: string;
  title: string;
  render?: (value: any) => any;
}

export interface TableProps {
  idProperty: string;
  columns: Column[];
  data: { [key: string]: any }[];
  scrollable?: boolean;
}
