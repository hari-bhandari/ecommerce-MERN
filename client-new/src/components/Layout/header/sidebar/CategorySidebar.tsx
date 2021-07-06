import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import Sticky from 'react-stickynode';
import { Scrollbars } from 'react-custom-scrollbars';
import Popover from '@/components/Layout/popover/popover';
import { ArrowDropDown } from '@/assets/icons/ArrowDropDown';
import { CategoryIcon } from '@/assets/icons/CategoryIcon';
import {
  SidebarMobileLoader,
  SidebarLoader,
} from '@/components/Others/placeholder/placeholder';
import {
  CategoryWrapper,
  TreeWrapper,
  PopoverHandler,
  PopoverWrapper,
  SidebarWrapper,
} from './CategorySidebar.style';
import { TreeMenu } from '@/components/Layout/tree-menu/tree-menu';
import useFetch from "@/hooks/useFetch";
import {API_BASE_URL} from "@/utils/config";
import {Scrollbar} from "@/components/Scrollbar";
import {useDispatch} from "react-redux";
import {setCategoryData} from "@/redux/actions/shopActions";

type SidebarCategoryProps = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
interface selectedQuery{
    category:string[]|string;
    subcategory:string[]|string
}

const SidebarCategory: React.FC<SidebarCategoryProps> = ({deviceType: { mobile, tablet, desktop }}) => {
    const dispatch=useDispatch()
  const router = useRouter();
    const [data, isLoading] = useFetch(`${API_BASE_URL}/api/v1/category/sub`)
    useEffect(()=>{
        if(data!==null){
            dispatch(setCategoryData(data.data))
        }

    },[data])

  const { pathname, query } = router;

  const selectedQueries:selectedQuery={
      category:query.category,
      subcategory:query.subcategory
  };
  if(isLoading){
      if(mobile||tablet){
      return <SidebarMobileLoader/>
      }
      return <SidebarLoader />;
  }

    if (isLoading) {
        return <SidebarLoader />;
    }
  const onCategoryClick = (slug: string,parent:string) => {
    const { type, ...rest } = query;
      if (parent){
          if (type) {
            router.push(
                {
                    pathname,
                    query: {category:parent,subcategory:slug },
                },
                {
                    pathname: `/${type}`,
                    query: {category:parent,subcategory:slug },
                }
            );
        }
     else {
      router.push({
        pathname,
          query: {category:parent,subcategory:slug },
      });
    }}
      else{
          if (type) {
              if (parent){
                  router.push(
                      {
                          pathname,
                          query: {  category: slug },
                      },
                      {
                          pathname: `/${type}`,
                          query: {  category: slug },
                      }
                  );
              }

          } else {
              router.push({
                  pathname,
                  query: {  category: slug },
              });
          }
      };
      }

  if (!data) {
    if (mobile || tablet) {
      return <SidebarMobileLoader />;
    }
    return <SidebarLoader/>
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
          <Sticky enabled={true} top={110} className={"leftSideBar"}>
              <Scrollbar className='sidebar-scrollbar'>
              <TreeWrapper>
                  <TreeMenu
                      data={data}
                      onClick={onCategoryClick}
                      active={selectedQueries}
                  />
              </TreeWrapper>
            </Scrollbar>
          </Sticky>
        </SidebarWrapper>
      </CategoryWrapper>
  );
};

export default SidebarCategory;
