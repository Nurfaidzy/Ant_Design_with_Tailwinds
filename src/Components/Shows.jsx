import { useState } from "react";
import phone from "./../Img/phonejpg.jpeg";
import { Button, Modal } from "antd";
import PlayCircleOutlined from "@ant-design/icons";

const Shows = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="pt-[5%]">
      <div
        className="py-[8%] px-[10%] bg-cover "
        style={{ backgroundImage: `url(${phone})` }}
      >
        <div className="flex justify-center">
          <div className="font-bold font-lora text-4xl bg-white/30 backdrop-blur-lg p-20 rounded-xl shadow-lg">
            <div className=" text-slate-800">See The Review of Product</div>
            <div className="text-center text-slate-800  py-5">
              Click on this Video
            </div>
            <div className="flex justify-center">
              <Button
                shape="circle"
                onClick={showModal}
                size="large"
                icon={<PlayCircleOutlined />}
              ></Button>
              <Modal
                width={610}
                title="Nothing Phone"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
              >
                <iframe
                  title="YouTube video player"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/i7LF6aeKZhI"
                ></iframe>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shows;
