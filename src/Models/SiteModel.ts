import { IssueTypeModel } from "./IssueTypeModel"

export interface SiteModel{
    cords: {x:number,y:number}
    id:string,
    issues:IssueTypeModel[] // in the ui these will be displayed as chips
    description: string,
    created_at: string
}