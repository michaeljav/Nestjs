import { FilterOperator, FilterSuffix, PaginateConfig } from 'nestjs-paginate';
import { Role } from '../entities/role.entity';

export const FindAllPaginationConfig: PaginateConfig<Role> = {
  sortableColumns: ['id', 'name', 'createdAt'],
  searchableColumns: ['name'],
  filterableColumns: {
    name: [FilterOperator.EQ, FilterSuffix.NOT],
    age: true,
  },
};
