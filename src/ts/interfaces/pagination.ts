export interface PaginationInterface<T> {
  data: T[];
  meta: PaginationMetaInterface;
}

export interface PaginationMetaInterface {
  itemsPerPage: number;
  page: number;
  total: number;
}
