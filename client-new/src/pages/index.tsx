import Sidebar from "../header/sidebar/sidebar";
type SidebarCategoryProps = {
    deviceType: {
        mobile: string;
        tablet: string;
        desktop: boolean;
    };
};

const Home:React.FC<SidebarCategoryProps>=({deviceType})=> {
  return (

    <div>
        <Sidebar deviceType={deviceType} type={"medicine"}/>
    </div>
  );
}
export default  Home;