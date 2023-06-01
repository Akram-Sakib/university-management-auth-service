import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

type UserModel = Model<IUser, object>

const userSchema = new Schema<IUser>(
  {
    id: {
      required: true,
      type: String,
      unique: true,
    },
    role: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export const User = model<IUser, UserModel>('User', userSchema)
