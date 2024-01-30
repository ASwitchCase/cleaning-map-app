export interface SiteModel{
    cords: {x:number,y:number}
    id:string,
    issues:string[] // in the ui these will be displayed as chips
    description: string,
    created_at: string
}