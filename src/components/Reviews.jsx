import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
} from "react-bootstrap";
import "./Reviews.css";
import Person1 from "../utils/img/person1.jpg";
import Person2 from "../utils/img/person2.jpg";
import Person3 from "../utils/img/person3.jpg";
import Person4 from "../utils/img/person4.jpg";

const Reviews = () => {
  return (
    <div className="reviews-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
      <div className="row g-4">
        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum aperiam amet animi corrupti, eius iure.
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={Person1}
                className="img-fluid rounded-circle mx-3 shadow"
                alt=""
              />
              <CardTitle className="text-success">John Mike</CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={Person2}
                className="img-fluid rounded-circle mx-3 shadow"
                alt=""
              />
              <CardTitle className="text-success">Maria Cruz</CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum aperiam amet animi corrupti, eius iure. Lorem ipsum dolor sit amet.
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={Person3}
                className="img-fluid rounded-circle mx-3 shadow"
                alt=""
              />
              <CardTitle className="text-success">Anna Gold</CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-6">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum aperiam amet animi corrupti, eius iure.
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img
                src={Person4}
                className="img-fluid rounded-circle mx-3 shadow"
                alt=""
              />
              <CardTitle className="text-success">Nick Burn</CardTitle>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
