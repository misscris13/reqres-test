import { User } from "src/app/user/model/User";

export class UserPage {
    data?: User[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}