export interface ProductImage {
    url: string
    alt?: string
}

export interface ProductPrice {
    value: number
    currencyCode : "USD" | "EUR" | "ZAR" | "GBP" | string
}

export interface ProductOptionValues {
    label: string
    hexColor?:string
}

export interface ProductOption  {
    id: string
    displayName: string
    values:ProductOptionValues[]
}

export interface ProductOptionVariant {
    id: string
    name: string
    options: ProductOption[]
}

export interface Product {
    id: string
    name: string
    description: string
    slug: string
    path: string
    price: ProductPrice
    images: ProductImage[]
    options: ProductOption[]
    variants: ProductOptionVariant[]
}