import Document, {Head, Html, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps({renderPage}) {
        const sheet = new ServerStyleSheet();
        try {
            const page = renderPage(App => props =>
                sheet.collectStyles(<App {...props} />)
            );
            return {...page, styles: sheet.getStyleElement()};
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>{this.props.styles}</Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;