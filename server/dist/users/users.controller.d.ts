import { UsersService } from './users.service';
import { User } from './models/users.model';
import { UserDto } from './dto/user.dto';
export declare class UsersController {
    private UsersService;
    constructor(UsersService: UsersService);
    create(userDto: UserDto): Promise<User>;
    getAll(): Promise<User[]>;
}
