import { UserDto } from './dto/user.dto';
import { RolesService } from 'src/roles/roles.service';
import { User } from './models/users.model';
export declare class UsersService {
    private userRepository;
    private roleService;
    constructor(userRepository: typeof User, roleService: RolesService);
    createUser(dto: UserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
}
