
import type { InferGetStaticPropsType } from 'next'
import {getAllProducts} from '@framework/product'
import {getConfig } from '@framework/api/config'
import { Layout } from '@components/common';
import {ProductCard } from '@components/Product'
import {Grid, Hero, Marquee } from '@components/ui'

export async function getStaticProps() {
const config = getConfig()
const products = await getAllProducts(config)


  return {
    props: {
  products
    },
    revalidate: 4 *60 * 60
  }
}


export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {
  
  return (
    <>
      <Grid>
            {products.slice(0, 3).map(product =>
              <ProductCard
                key={product.id}
                product={product} />)}
      </Grid>
      <Hero headline="Fan Authentix Original Apparell" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" />
      <Marquee> 
        {products.slice(0, 3).map(product =>
          <ProductCard
            key={product.id}
            variant="slim"
            product={product}
          />)}
      </Marquee>
        <Grid layout="B">
            {products.slice(0, 3).map(product =>
              <ProductCard
                key={product.id}
                product={product} />)}
      </Grid>
        <Marquee variant="secondary"> 
        {products.slice(0, 3).map(product =>
          <ProductCard
            key={product.id}
            variant="slim"
            product={product}
          />)}
      </Marquee>
    </>
  )
}


Home.Layout = Layout