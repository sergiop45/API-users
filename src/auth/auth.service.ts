import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UsersEntity } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor( private readonly userService: UsersService, private readonly jwtService: JwtService){}

    async login (user) {
        const payload = { sub: user.id, email: user.email }

        return {
            token: this.jwtService.sign(payload)
        } 
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
