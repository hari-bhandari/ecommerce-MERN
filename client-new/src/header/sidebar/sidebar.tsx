import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Sticky from 'react-stickynode';
import { Scrollbars } from 'react-custom-scrollbars';
import Popover from 'components/popover/popover';
import { ArrowDropDown } from 'assets/icons/ArrowDropDown';
import { CategoryIcon } from 'assets/icons/CategoryIcon';
import {
  SidebarMobileLoader,
  SidebarLoader,
} from 'components/placeholder/placeholder';
import {
  CategoryWrapper,
  TreeWrapper,
  PopoverHandler,
  PopoverWrapper,
  SidebarWrapper,
} from './sidebar.style';
import {SIDEBAR_DATA} from '../site-navigation'
import { TreeMenu } from 'components/tree-menu/tree-menu';


type SidebarCategoryProps = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const SidebarCategory: React.FC<SidebarCategoryProps> = ({deviceType: { mobile, tablet, desktop }}) => {
  const router = useRouter();
  const data=SIDEBAR_DATA

  const { pathname, query } = router;
  const selectedQueries = query.category;


  const onCategoryClick = (slug: string) => {
    const { type, ...rest } = query;
    if (type) {
      router.push(
          {
            pathname,
            query: { ...rest, category: slug },
          },
          {
            pathname: `/${type}`,
            query: { ...rest, category: slug },
          }
      );
    } else {
      router.push({
        pathname,
        query: { ...rest, category: slug },
      });
    }
  };
  const isSidebarSticky = true

  if (!data) {
    if (mobile || tablet) {
      return <SidebarMobileLoader />;
    }
    return <SidebarLoader />;
  }
  return (
      <CategoryWrapper>
        <PopoverWrapper>
          <Popover
              handler={
                <PopoverHandler>
                  <div>
                    <CategoryIcon />
                    Select your Category
                  </div>
                  <div>
                    <ArrowDropDown />
                  </div>
                </PopoverHandler>
              }
              className="category-popover"
              content={
                <>
                  <TreeMenu
                      data={data}
                      onClick={onCategoryClick}
                      active={selectedQueries}
                  />
                </>
              }
          />
        </PopoverWrapper>

        <SidebarWrapper>
          <Sticky enabled={isSidebarSticky} top={110} className={"leftSideBar"}>
            <Scrollbars
                universal
                autoHide
                autoHeight
                autoHeightMax={1000}
                renderView={(props) => (
                    <div
                        {...props}
                        style={{
                          ...props.style,
                          marginLeft: props.style.marginRight ,
                          marginRight: props.style.marginRight,
                        }}
                    />
                )}
            >
              <TreeWrapper>
                <TreeMenu
                    data={data}
                    onClick={onCategoryClick}
                    active={selectedQueries}
                />
              </TreeWrapper>
            </Scrollbars>
          </Sticky>
        </SidebarWrapper>
      </CategoryWrapper>
  );
};

export default SidebarCategory;
