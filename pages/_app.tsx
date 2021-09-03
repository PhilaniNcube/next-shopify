
import { AppProps } from 'next/app'
import {FC, Fragment } from "react";


const Noop: FC = ({children}) => {
    return (
        <Fragment>{children}</Fragment>
    )
}

function MyApp({ Component, pageProps }: AppProps & { Component: {Layout:FC}} ) {
    
const Layout = Component.Layout ?? Noop

    return (
        <Layout>
           
                <Component {...pageProps} />
            
        </Layout>

    )
}

export default MyApp