import { UserDto } from './../users/dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(userDto: UserDto): Promise<{
        token: string;
    }>;
    registration(userDto: UserDto): Promise<{
        token: string;
    }>;
    private generateToken;
    private validateUser;
}
