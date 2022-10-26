import { Carousel } from "antd";

import wpp1 from "./../Img/wpp1.jpeg";

const Hero = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${wpp1})` }}
        className=" bg-cover h-fit"
      >
        <Carousel afterChange={onChange}>
          <div className="py-[5%] px-[15%] bg-white/20">
            <div className="bg-white/20 rounded-xl p-20 backdrop-blur-lg shadow-xl border-2 ">
              <h2 className="font-lora font-bold text-[#FFF9B0] text-6xl drop-shadow-lg">
                Search your best handphone
              </h2>
              <h3 className="leading-4 text-[#573f14]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, eligendi quas dolorem voluptatem repellendus libero
                et neque doloribus eaque, ratione culpa cumque velit,
                repudiandae inventore. Tempore aperiam impedit laborum optio!
              </h3>
            </div>
          </div>
          <div className="py-[5%] px-[15%] bg-white/20">
            <div className="bg-white/20 rounded-xl p-20 backdrop-blur-lg shadow-xl border-2 ">
              <h2 className="font-lora font-bold text-[#FFF9B0] text-6xl drop-shadow-lg">
                Did you pick something, buying now!
              </h2>
              <h3 className="leading-4 text-[#573f14]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, eligendi quas dolorem voluptatem repellendus libero
                et neque doloribus eaque, ratione culpa cumque velit,
                repudiandae inventore. Tempore aperiam impedit laborum optio!
              </h3>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
