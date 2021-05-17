import { User } from "../user/user";
import { Goal } from "./goal";

export class Payment {
    paymentId?: number;
    goalid: Goal;
    userId: User;
    depositamt: number;
    startdate: Date;
    depositfreq: Date; 
    active: boolean;

}