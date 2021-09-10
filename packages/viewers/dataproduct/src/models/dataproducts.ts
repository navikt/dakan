
interface Contact {
    name: string
    email: string
}

export interface Dataproduct {
    id: string
    title: string
    description: string
    type: string
    format: string
    modified: string
    issued: string
    periodicity: string
    provenance: string
    contact: Contact
    repo: string
    datasets: Dataset[]
}



export interface Dataset {
    id: string
    title: string
    description: string
    format: string
}