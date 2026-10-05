import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppService } from './app.service.js';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [UsuariosModule, PrismaModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
