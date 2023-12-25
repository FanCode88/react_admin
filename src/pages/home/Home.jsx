import { Char } from "../../components/char/Char";
import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import { WidgetSm } from "../../components/widgetSm/WidgetSm";
import { WidgetLg } from "../../components/widgetLg/WidgetLg";

export const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Char data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};
