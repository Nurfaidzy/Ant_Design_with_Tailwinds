import { Collapse } from "antd";
const Faq = () => {
  const { Panel } = Collapse;
  return (
    <>
      <div className="py-[10%] px-[5%]">
        <div className="text-center font-bold text-4xl font-lora">
          This FAQ about us
        </div>
        <div className="pt-[3%] px-[20%]">
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Our Product" key="1">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                impedit sint facilis, doloribus nisi ullam officia tempore
                inventore similique earum consectetur dicta autem veniam
                incidunt quibusdam eius, eveniet molestiae. Ex.
              </p>
            </Panel>
            <Panel header="Our Law" key="2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                impedit sint facilis, doloribus nisi ullam officia tempore
                inventore similique earum consectetur dicta autem veniam
                incidunt quibusdam eius, eveniet molestiae. Ex.
              </p>
            </Panel>
            <Panel header="How to Buying" key="3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                impedit sint facilis, doloribus nisi ullam officia tempore
                inventore similique earum consectetur dicta autem veniam
                incidunt quibusdam eius, eveniet molestiae. Ex.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default Faq;
