import { Layout } from '@components/common';
import { ProductView } from '@components/Product';

import { Container } from '@components/ui';
import { getConfig } from '@framework/api/config';
import {getAllProductPaths, getProduct} from '@framework/product';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';

// responsible for fething all of the product slugs
export const getStaticPaths: GetStaticPaths = async () => {
    const config = getConfig()
const {products} = await getAllProductPaths(config)

    return {
        paths: products.map(p => ({params: {slug: p.slug}})),
        fallback: false
    }

}


// responsible for fetching specific data to the page
export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string; }>) => {
    
    const config = getConfig()

    

    const { product } = await getProduct({
        config,
        variables: { slug: params?.slug }
    })

    return {
        props: {
            product
        }
    }
}


export default function ProductSlug({ product }: InferGetStaticPropsType<typeof getStaticProps>) {

   
   
    return (
        <>
      {product && <ProductView product={product} />}
        </>
    )
}

ProductSlug.Layout = Layout