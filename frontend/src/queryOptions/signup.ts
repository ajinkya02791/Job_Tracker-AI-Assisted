import type { SignupData } from '../datatypes/signupPage'
import axios from 'axios'

export const signupUser = async (data: SignupData) => {
  try {
    const res = await axios.post("http:localhost:5000/api", data);
    const result = res.data;
    return result;
  } catch (error: any) {
    
    alert(`${error.message}` || "Signup failed");
  }
};