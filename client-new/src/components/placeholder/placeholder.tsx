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
export const SidebarMobileLoader = () => (
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
    >
        <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
        <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
        <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
        <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
        <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
        <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
        <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
        <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
        <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
        <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
        <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
        <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
        <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
    </ContentLoader>
)
export default PostLoader