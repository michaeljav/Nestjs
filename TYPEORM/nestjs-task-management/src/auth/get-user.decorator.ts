import { createParamDecorator } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';

//custom decorator
export const GetUser = createParamDecorator((data, req): UserEntity => {
  const { args } = req;
  const { user } = args[0];
  // console.log('michael inside decorator ', args, req, req[0]?.user);
  // console.log('michael inside decorator ', user);
  // return req.user;
  return user;
});
