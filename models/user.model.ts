import { model, Schema, Types } from "mongoose";
interface IUsers {
  name: string;
  email: string;
  password: string;
}
const userSchema = new Schema<IUsers>({}, { timestamps: true });

const User = model<IUsers>("user", userSchema);

export default User;
