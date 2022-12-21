export class ComplexForm {
  personalInfo!: {
    firstName: string,
    lastName: string
  };
  contactPreference!: string;
  email?: {
    email: string,
    confirm: string
  };
  phone?: string;
  loginInfo!: {
    username: string,
    password: string,
    confirmPassword: string,
  };
}