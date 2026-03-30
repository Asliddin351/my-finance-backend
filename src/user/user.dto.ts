import { IsEmail, IsInt, IsString, Length, Min } from 'class-validator';

export class UserDto {
  name: string;
  email: string;
}

export class createUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(0)
  age: number;

  @IsString()
  @Length(8, 50)
  password: string;

  @IsString()
  @Length(8, 50)
  confirm_password: string;
}
