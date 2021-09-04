export interface ProductImage {
    url: string
    alt?: string
}

export interface ProductPrice {
    value: number
    currencyCode : "USD" | "EUR" | "ZAR" | "GBP" | string
}

export interface Product {
    id: string
    name: string
    description: string
    slug: string
    path: string
    price: ProductPrice
    images: ProductImage[]
}