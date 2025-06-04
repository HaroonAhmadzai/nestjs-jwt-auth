import { Injectable, NotFoundException } from "@nestjs/common";
import { AuthDto } from "./dto/auth.dto";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService,private userService:UsersService) { }
    loginWithEmail({ email }: AuthDto):Object {
        const authUser = this.userService.findByEmail(email);
        if (!authUser) {
            throw new NotFoundException("User not found");
        }
        const payload = { email: authUser.email, sub: authUser.id };
        const token = this.jwtService.sign(payload);
        return {
            accessToken: token
        }
    }
}