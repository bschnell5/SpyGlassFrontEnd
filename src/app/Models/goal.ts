import { User } from "../user/user";

export class Goal {
    goalid?: number;
    userId: User;
    name: string;
    description: any; 
    startDate: Date;
    targetDate: Date;
    targetDollar: number;
    currentSaving: number;
    active: boolean;
}