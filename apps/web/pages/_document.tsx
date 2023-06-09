import { site } from '@config';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta charSet='UTF-8' />
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                    <meta name='keywords' content={site.keywords} />
                    <meta name='description' content={site.description} />
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <body className='dark:text-dimmed-font dark:bg-dimmed-900 min-h-screen font-sans antialiased'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
