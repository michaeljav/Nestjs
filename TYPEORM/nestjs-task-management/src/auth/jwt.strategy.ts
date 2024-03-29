import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserEntity } from './entity/user.entity';
import { JwtPayload } from './interface/jwt-payload.interface';
import { Repository } from 'typeorm';
import * as config from 'config';

const jwtConfig = config.get('jwt');
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || jwtConfig.secret,
    });
  }

  async validate(payload: JwtPayload): Promise<UserEntity> {
    const { username } = payload;
    // console.log('MICHAEL VALIDATE', payload);
    const user = await this.userRepository.findOne({ where: { username } });
    // console.log('MICHAEL USER', user);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
