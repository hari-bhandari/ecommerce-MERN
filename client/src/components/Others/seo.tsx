import React from 'react';
import Head from 'next/head';

type SeoProps = {
    title: string;
    description: string;
    canonical?: string;
    css?: string;
    js?: string;
    image?: string;
};

export const SEO: React.FC<SeoProps> = ({
                                            title,
                                            description,
                                            canonical,
                                            css,
                                            js,
                                            image,
                                        }) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta property="og:type" content="website"/>
        <meta name="og:title" property="og:title" content={title}/>
        <meta
            name="og:description"
            property="og:description"
            content={description}
        />
        <meta property="og:site_name" content="Wise Cart"/>
        <meta property="og:url" content={`${canonical}`}/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:site" content="@wisecart"/>
        <meta name="twitter:creator" content="@wisecart"/>
        {css && <link rel="stylesheet" href={`${css}`}/>}
        <meta property="og:image"
              content={`${image ? image : "https://res.cloudinary.com/wisecart/image/upload/v1616709850/gnfkfnm1c9rczncp5c5t.png"}`}/>
        <meta name="twitter:image"
              content={`${image ? image : "https://res.cloudinary.com/wisecart/image/upload/v1616709850/gnfkfnm1c9rczncp5c5t.png"}`}/>
        {canonical && <link rel="canonical" href={`${canonical}`}/>}
        {js && <script type="text/javascript" src={`${js}`}></script>}
    </Head>
);
