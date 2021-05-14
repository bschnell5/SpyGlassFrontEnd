import { User } from "../user/user";

export class Goal {
    goalid?: number;
    userId: User;
    name: string;
    description: string; 
    startDate: Date;
    targetDate: Date;
    currentSaving: number;
    targetDollar: number;
    active: boolean;
}