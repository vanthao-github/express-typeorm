import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {
  private userRepository = getRepository(User);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    const result = await this.userRepository.findOne(request.params.id);
    console.log('result ', result);
    if (!result) throw new Error('User Not Found!');
    return result;
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const result = this.userRepository.save(request.body);
    if (!result) {
      console.log('result ', result);
    }
    return result
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.userRepository.findOne(request.params.id);
    await this.userRepository.remove(userToRemove);
  }

}