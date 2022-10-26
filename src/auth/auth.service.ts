import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { UsersEntity } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor( private readonly userService: UsersService){

    }
    
    async validateUser (email: string, password: string) {
        let user: UsersEntity
        try {
            user = await this.userService.findOneOrFail(email);
        } catch (error) {
            return null
        }

        const isPasswordIsValid = compareSync(password, user.password);
        if (!isPasswordIsValid) return null;

        return user;

    }


}
