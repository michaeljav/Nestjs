import { SetMetadata } from '@nestjs/common';
export const ROLES_KEY = 'roles';
export const Roles = (...args: string[]) => {
  console.log('MICHAEL JAVIER ARGS', args);
  return SetMetadata(ROLES_KEY, args);
};
