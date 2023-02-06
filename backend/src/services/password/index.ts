import { comparePassword } from "./comparePassword.service";
import { hashPassword } from "./hashPassword.service";

export const passwordServices = {
    hashPassword,
    comparePassword
}