/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserSignUpDto } from './dto/user-signup.dto';
import { hash, compare } from 'bcrypt';
import { UserSignInDto } from './dto/user-signin.dto';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) { }

  async signup(userSignUpDto: UserSignUpDto): Promise<UserEntity> {
    const userExists = await this.findUserByEmail(userSignUpDto.email)
    if (userExists) throw new BadRequestException('User already exist')
    userSignUpDto.password = await hash(userSignUpDto.password, 10)
    let user = this.usersRepository.create(userSignUpDto);
    user = await this.usersRepository.save(user);
    delete user.password;
    return user;

  }

  async signin(userSignInDto: UserSignInDto) {
    const userExists = await this.usersRepository.createQueryBuilder('user').addSelect('user.password').where('user.email=:email', { email: userSignInDto.email }).getOne();
    if (!userExists) throw new BadRequestException('User not Exists');
    const matchPassword = await compare(userSignInDto.password, userExists.password);
    if (!matchPassword) throw new BadRequestException('wrong password entered');
    delete userExists.password;
    return userExists;
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<UserEntity> {
    const user =  await this.usersRepository.findOneBy({id : parseInt(id)});
    if(!user) throw new NotFoundException('user not found');
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  hello(): string {
    return "hello World"
  }

  async findUserByEmail(email: string) {
    return await this.usersRepository.findOneBy({ email })
  }

  async accessToken(user: UserEntity): Promise<string> {
    return sign({
      id: user.id, email: user.email
    }, process.env.ACCESS_TOKEN_SECRET_KEY,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME })
  }
}


