interface SigninRequest {
  email: string;
  password: string;
}
interface SignupRequest {
  userName: string;
  email: string;
  password: string;
}
interface SigninResponse {
  token: string;
  userData: {
    _id: string | undefined;
    userName: string | undefined;
  };
}
interface SignupResponse {
  token: string;
  userData: {
    _id: string | undefined;
    userName: string | undefined;
  };
}
