import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';  // Import User model

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(name: string, email: string, password: string) {
    const user = new this.userModel({ name, email, password });
    return user.save();
  }

  async findOneByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }
}
