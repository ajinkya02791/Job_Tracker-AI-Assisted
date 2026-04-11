import { Schema, model, Document } from 'mongoose';

// 1. Define the Interface (The "Blueprint" for TypeScript)
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

// 2. Define the Schema (The "Rules" for MongoDB)
const userSchema = new Schema<IUser>({
  name: { 
    type: String, 
    required: [true, 'Name is required'],
    trim: true 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true, // Prevents duplicate signups
    lowercase: true, 
    trim: true 
  },
  password: { 
    type: String, 
    required: [true, 'Password is required'],
    select: false // Automatically hides password when fetching users
  }
}, { 
  timestamps: true // Adds createdAt and updatedAt automatically
});

// 3. Create and export the Model
const User = model<IUser>('User', userSchema);
export default User;