interface SigninRequest {
  email: string;
  password: string;
}
interface SignupRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
interface SigninResponse {
  token: string;
  userData: {
    _id: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
  };
}
interface SignupResponse {
  token: string;
}
