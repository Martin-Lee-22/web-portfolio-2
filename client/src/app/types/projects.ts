export type images = {
    src: string,
    alt: string
}

export type Project = {
    title: string,
    date: string,
    role: string,
    description: string,
    images: images[],
    tools:string[],
    link: string,
    github: string,
    inProgress: boolean
}