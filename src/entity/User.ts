import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsString,
  IsOptional,
} from 'class-validator';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  @IsInt()
  id: number;

  @Column()
  @IsString()
  @IsOptional()
  firstName: string;

  @Column()
  @IsString()
  lastName: string;

  @Column()
  @IsInt()
  @IsOptional()
  age: number;
}
