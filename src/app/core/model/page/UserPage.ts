import { Pageable } from "./Pageable";
import { User } from "src/app/user/model/User";

export class UserPage {
    content: User[];
    pageable: Pageable;
    totalElements: number;
}