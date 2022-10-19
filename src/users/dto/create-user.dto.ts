import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { regexHelper } from "src/helpers/regex.helper";

export class CreateUserDto {
    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Matches(regexHelper.password)
    password: string;
}