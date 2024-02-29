import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { UserEntity } from './entity/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    // console.log(authCredentialsDto);
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  async signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    // console.log(authCredentialsDto);
    return await this.authService.signIn(authCredentialsDto);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  //retrieve all the request
  // test(@Req() req) {
  //with the custom decorator only get the user
  test(@GetUser() user: UserEntity) {
    // console.log('Javier', req);
    console.log('Javier -->', user);
  }
}
