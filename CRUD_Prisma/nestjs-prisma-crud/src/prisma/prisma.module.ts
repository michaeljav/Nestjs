/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService], //lo que yo quiero importar
  exports: [PrismaService],
})
export class PrismaModule {}
