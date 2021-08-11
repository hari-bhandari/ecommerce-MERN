import React from 'react';
import ContentLoader from 'react-content-loader';

type Props = {
    deviceType: {
        mobile: boolean;
        tablet: boolean;
        desktop: boolean;
    };
    props? : any;
};
export const FeaturedLoading:React.FC<Props> = ({deviceType}) => (
    <ContentLoader viewBox="0 0 1000 300" >

      <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
      <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
      <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
      <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
      <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
      <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
      <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
      <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
      <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
      <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
      <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
      <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
    </ContentLoader>
)

const PostLoader = (props: JSX.IntrinsicAttributes) => (
  <ContentLoader
    height={350}
    width={245}
    speed={2}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="2" y="2" rx="0" ry="0" width="240" height="197" />
    <rect x="15" y="220" rx="0" ry="0" width="140" height="25" />
    <rect x="15" y="254" rx="0" ry="0" width="65" height="15" />
    <rect x="15" y="300" rx="0" ry="0" width="67" height="20" />
    <rect x="170" y="300" rx="0" ry="0" width="60" height="20" />
  </ContentLoader>
);
export const Category = () => (
  <ContentLoader
    height={46}
    width={400}
    speed={2}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="58" y="10" rx="0" ry="0" width="287" height="26" />
    <rect x="364" y="10" rx="0" ry="0" width="26" height="26" />
    <rect x="16" y="10" rx="0" ry="0" width="26" height="26" />
  </ContentLoader>
);
export const CategoryLoader = () => (
    <ContentLoader
        height={46}
        width={400}
        speed={2}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="58" y="10" rx="0" ry="0" width="58" height="26" />
        <rect x="364" y="10" rx="0" ry="0" width="58" height="26" />
        <rect x="16" y="10" rx="0" ry="0" width="58" height="26" />
    </ContentLoader>
);
export const SidebarMobileLoader = (props: JSX.IntrinsicAttributes) => (
    <ContentLoader
        speed={4}
        width={"100%"}
        height={56}
        viewBox="0 0 974 56"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="26" ry="26" width="100%" height="56"/>
    </ContentLoader>
);
export const SidebarLoader = (props: JSX.IntrinsicAttributes) => (
  <ContentLoader
    height={400}
    width="calc(100% - 30px)"
    speed={2}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="376" y="22" rx="0" ry="0" width="0" height="0" />
    <rect x="27" y="50" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="50" rx="0" ry="0" width="260" height="24" />

    <rect x="27" y="89" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="89" rx="0" ry="0" width="260" height="24" />

    <rect x="27" y="128" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="128" rx="0" ry="0" width="260" height="24" />

    <rect x="27" y="167" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="167" rx="0" ry="0" width="260" height="24" />

    <rect x="27" y="206" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="206" rx="0" ry="0" width="260" height="24" />

    <rect x="27" y="245" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="245" rx="0" ry="0" width="260" height="24" />

    <rect x="27" y="284" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="284" rx="0" ry="0" width="260" height="24" />

    <rect x="27" y="323" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="323" rx="0" ry="0" width="260" height="24" />
  </ContentLoader>
);
export const ItemLoader =(props: JSX.IntrinsicAttributes) => (
    <ContentLoader
        width={"100%"}
        height={600}
        viewBox="0 0 700 300"
        backgroundColor="#f5f5f5"
        foregroundColor="#dbdbdb"
        {...props}
        speed={2}
    >
        <circle cx="472" cy="159" r="7" />
        <rect x="487" y="154" rx="5" ry="5" width="220" height="10" />
        <circle cx="472" cy="190" r="7" />
        <rect x="487" y="184" rx="5" ry="5" width="220" height="10" />
        <circle cx="472" cy="219" r="7" />
        <rect x="487" y="214" rx="5" ry="5" width="220" height="10" />
        <circle cx="472" cy="249" r="7" />
        <rect x="487" y="244" rx="5" ry="5" width="220" height="10" />
        <rect x="64" y="18" rx="0" ry="0" width="346" height="300" />
        <rect x="294" y="336" rx="0" ry="0" width="40" height="44" />
        <rect x="218" y="335" rx="0" ry="0" width="40" height="44" />
        <rect x="142" y="334" rx="0" ry="0" width="40" height="44" />
        <rect x="70" y="333" rx="0" ry="0" width="40" height="44" />
        <rect x="470" y="18" rx="0" ry="0" width="300" height="25" />
        <rect x="470" y="58" rx="0" ry="0" width="300" height="6" />
        <rect x="470" y="68" rx="0" ry="0" width="300" height="6" />
        <rect x="470" y="78" rx="0" ry="0" width="300" height="6" />
        <rect x="470" y="99" rx="0" ry="0" width="70" height="30" />
        <rect x="560" y="99" rx="0" ry="0" width="70" height="30" />
    </ContentLoader>
)
export const CategoryMobile = (props) => (
    <ContentLoader
        speed={2}
        width={974}
        height={58}
        viewBox="0 0 974 58"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="388" y="198" rx="0" ry="0" width="26" height="6" />
        <rect x="166" y="267" rx="0" ry="0" width="0" height="1" />
        <rect x="16" y="12" rx="0" ry="0" width="90" height="36" />
        <rect x="125" y="13" rx="0" ry="0" width="90" height="36" />
        <rect x="485" y="12" rx="0" ry="0" width="90" height="36" />
        <rect x="362" y="12" rx="0" ry="0" width="90" height="36" />
        <rect x="249" y="12" rx="0" ry="0" width="90" height="36" />
    </ContentLoader>
)

export default PostLoader