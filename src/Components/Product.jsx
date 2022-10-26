import { Card, Col, Row } from "antd";

const Product = () => {
  return (
    <>
      <div className="text-4xl py-10 font-lora font-bold text-center">
        This phone in out store
      </div>
      <div className="px-[5%]">
        <Row gutter={[16, 16]} className="h-fit">
          <Col span={6}>
            <Card title="Name Handphone ">Handphone</Card>
          </Col>
          <Col span={6}>
            <Card title="Name Handphone ">Handphone</Card>
          </Col>
          <Col span={6}>
            <Card title="Name Handphone ">Handphone</Card>
          </Col>
          <Col span={6}>
            <Card title="Name Handphone ">Handphone</Card>
          </Col>
          <Col span={6}>
            <Card title="Name Handphone ">Handphone</Card>
          </Col>
          <Col span={6}>
            <Card title="Name Handphone ">Handphone</Card>
          </Col>
          <Col span={6}>
            <Card title="Name Handphone ">Handphone</Card>
          </Col>
          <Col span={6}>
            <Card title="Name Handphone ">Handphone</Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Product;
