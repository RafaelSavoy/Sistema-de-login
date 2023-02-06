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
}
interface SignupResponse {
  token: string;
}
