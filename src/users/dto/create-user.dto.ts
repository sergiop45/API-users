import { IsEmail, IsNotEmpty, Matches } from "class-validator";
import { messagesHelper } from "src/helpers/messages.helper";
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
    @Matches(regexHelper.password, {
        message: messagesHelper.PASSWORD_VALID
    })
    password: string;
}