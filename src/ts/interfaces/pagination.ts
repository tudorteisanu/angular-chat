export interface PaginationInterface<T> {
  data: T[];
  currentPage: number;
  itemsPerPage: number;
  lastPage: number;
}
