export interface Billboard {
    id: string,
    name: string,
    imageUrl: String,
}

export interface Category {
    id: String,
    name: String,
    billboard: Billboard
}