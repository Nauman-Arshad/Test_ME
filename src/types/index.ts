export type productType = {
    id: string,
    title: string,
    image: string,
    price: number
}
 
export type cartType = {
    product: productType,
    quantity: number
}