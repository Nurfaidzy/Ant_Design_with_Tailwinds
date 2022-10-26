import { Button, Input } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-[10%] py-[1%]">
        <div className="font-bold text-2xl font-lora">Logo</div>
        <div>
          <Input
            placeholder="Search Here"
            prefix={<SearchOutlined />}
            allowClear
            className="font-lora"
          />
        </div>
        <div className="flex justify-between gap-10">
          <div className="flex justify-between gap-10 pt-1 font-lora">
            <p>About Us</p>
            <p>Products</p>
            <p>Shop</p>
          </div>
          <Button type="primary" className="font-lora" icon={<UserOutlined />}>
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
