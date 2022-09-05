import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Pizza Shop</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              architecto corporis dolore aspernatur eveniet quaerat
              exercitationem est in, ratione sit possimus, reiciendis, quia
              asperiores corrupti quas accusamus. Animi necessitatibus
              aspernatur accusamus ipsa provident quidem quis repellat, porro
              enim ab ea nemo vel vero quia asperiores error nisi qui ratione,
              eum natus fuga hic corrupti est ut. Illo dolor esse cum dolore
              beatae culpa debitis. Totam velit ab quae rem sit voluptate,
              placeat, laboriosam nulla ullam quas illum dolorem voluptatibus,
              commodi vel aperiam odit illo! Eligendi facere deleniti animi
              corrupti consectetur accusamus voluptatibus perspiciatis
              reprehenderit vel. Magni ut maxime deleniti temporibus excepturi
              dolorem, nihil esse nemo! Placeat tempora a asperiores laudantium.
              Iure dolorem at eaque laborum blanditiis iste voluptates, animi
              quae. Magni, dolorum nulla repudiandae velit aspernatur quos
              dignissimos corporis eius totam sunt eligendi modi ad tempora.
              Similique id exercitationem eos. Corrupti libero nobis perferendis
              omnis magnam, aliquam reprehenderit voluptas, quam maiores dolore
              quaerat illum laboriosam aliquid id vitae. Libero ratione velit
              assumenda officiis possimus pariatur aperiam, molestias dolore
              recusandae cum voluptatum iste accusamus facilis quod vitae est
              earum blanditiis eum corrupti cupiditate laborum, culpa at! Natus
              ducimus tenetur cupiditate, nisi dicta asperiores et omnis?
              Nostrum, cum facere? Placeat, dicta perspiciatis.
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>9420896287</td>
                </tr>
                <tr>
                  <td>
                    <MdEmail />
                  </td>
                  <td>Email</td>
                  <td>arpitbhagat@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
