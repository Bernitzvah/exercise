import { AccountModel } from "./account.model";

export interface RankedUsers {
    users: AccountModel[];
    postNumber: number[];
}