import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from "./strategies/jwt.strategy";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";

@Module({
    controllers: [AuthController],
    providers: [AuthService,JwtStrategy],
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
          secret: 'secret-key',
          signOptions: { expiresIn: '1h' },
        }),
      ],
})
export class AuthModule {}