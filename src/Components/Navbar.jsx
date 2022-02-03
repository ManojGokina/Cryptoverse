import React from "react";
import { Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons/lib/icons";

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className="nav-conatiner">
      <div className="logo-container">
        <Avatar  src={icon} size='large' id="logo-image"/>
        <Typography.Title level={2} className="logo">
            <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined/>}>
              <Link to="/homepage">
                  Home
              </Link>
              
          </Menu.Item>
          <Menu.Item icon={<FundOutlined/>}>
              <Link to="/cryptocurrencies">
                Cryptocurrencies
              </Link>
              
          </Menu.Item> <Menu.Item icon={<MoneyCollectOutlined/>}>
              <Link to="/exchanges">
                  Exchanges
              </Link>
              
          </Menu.Item> <Menu.Item icon={<BulbOutlined/>}>
              <Link to="/news">
                News
              </Link>
              
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
