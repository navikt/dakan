
interface ContactPoint {
    name: string
    email: string
}



export interface Dataproduct {
    id: string
    properties: {
        title: string
        description: string
        repo: string
        pii: boolean
        periodicity: string
        contactPoint: ContactPoint
        author: string
        long_description: string
        accessRights: string
        keyword: string[]
        theme: string
        temporal: string
        language: string
    }
    datasets: Dataset[]
}


interface AccessGroups {
    canRead: string []
    canRequest: string[]
}

export interface Dataset {
    id: string
    gcpProject: string
    dataset: string
    table: string
    title: string
    description: string
    sources: string[]
    long_description: string
    spatial: string
    accessRights: string
    accessGroups: AccessGroups
    keyword: string[]
}