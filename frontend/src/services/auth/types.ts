export interface UserRegisterRequest {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserRegisterResponse {
  token: string;
  userData: {
    _id: string;
    userName: string;
  };
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  token: string;
  userData: {
    _id: string;
    userName: string;
  };
}
