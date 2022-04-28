import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import config from 'config'

enum Gender{
  male = "male",
  female = "femail"
}

export interface UserInput{
  username: string;
  password: string;
  gender: Gender;
  birth: Date;
}

export interface UserDocument extends UserInput, mongoose.Document{
  profile_image: String;
  comment: String;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<Boolean>;
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passowrd: { type: String, required: true },
  gender: { type: Gender, required: true },
  birth: { type: Date, required: true },
  profile_image: { type: String, required: true, default: 'systemImage' },
  comment:{type:String, required:true, default:"enjoy your life"}
}, {
  timestamps:true,
})

userSchema.pre('save',async function (next) {
  let user = this as UserDocument;
  
  if (!user.isModified("password")) {
    return next()
  }
  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"))
  const hash = bcrypt.hashSync(user.password, salt)
  user.password = hash
  return next()
})

userSchema.methods.comparePassword = async function (candidatePassword:string):Promise<boolean> {
  const user = this as UserDocument

  return bcrypt.compare(candidatePassword, user.password).catch(e => false);
}

const UserModel = mongoose.model<UserDocument>("User", userSchema);
export default UserModel;