import { z } from 'zod';

// Define the shape of a "perfect" signup request
export const signupSchema = z.object({
  body: z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })
});

// This magic line creates a TS type based on the schema above!
export type SignupInput = z.infer<typeof signupSchema>['body'];