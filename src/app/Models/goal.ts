export interface Goal {
    goalid?: number;
    name: string;
    description: string; 
    startdate: Date;
    targetdate: Date;
    currentsaving: number;
    targetdollar: number;
    active: boolean;
}