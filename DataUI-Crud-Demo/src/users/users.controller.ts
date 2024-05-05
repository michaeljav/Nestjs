import { Controller } from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedRequest,
} from '@dataui/crud';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { Roles } from '../iam/authorization/decorators/decorators.decorator';
import { Role } from '../roles/entities/role.entity';

@Crud({
  model: {
    type: User,
  },
})
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
  get base(): CrudController<User> {
    return this;
  }

  @Override()
  @Roles('admin')
  getMany(@ParsedRequest() req: CrudRequest) {
    return this.base.getManyBase(req);
  }
}
