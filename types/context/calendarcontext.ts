export interface Icalendarcontext {
    DateInfo: Idateinfo
    getDateInfo:(e:any)=>void
    TommorowDateInfo:Idateinfo
    isDateTerminal: Boolean
    toggleisDateTerminal:()=>void
}

export interface Idateinfo {  
    Day: String
    Month: String
    Year: String,
    Date: String
}