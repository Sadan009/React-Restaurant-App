import React from "react";
import "./About.css";
import AboutChef1 from "../utils/img/about-chef1.jpg";
import AboutChef2 from "../utils/img/about-chef2.jpg";
import ImageGallery from "../components/ImageGallery";
import Reviews from "../components/Reviews";

const About = () => {
  return (
    <div className="about-page">
      <header className="mt-5">
        <div
          className="container h-100 d-flex align-items-center 
        justify-content-center"
        >
          <h1 className="text-light">About</h1>
        </div>
      </header>
      <div className="container my-5">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
          reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quaerat ex dolores assumenda illum illo corporis reiciendis nobis
          facere quasi necessitatibus. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Minima, unde.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          quo nisi. A sunt deleniti quod architecto laborum cum dolorem vel.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          obcaecati odio voluptatibus libero atque quam optio porro cupiditate
          ut veniam maiores deserunt, et voluptas esse facilis sunt accusamus
          iste sequi.
        </p>

        <div className="row">
          <div className="col-lg-6">
            <img src={AboutChef1} alt="" className="img-fluid my-4" />
          </div>
          <div className="col-lg-6">
            <img src={AboutChef2} className="img-fluid my-4" alt="" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          beatae iusto ab cumque aliquam nihil iste magni temporibus, error
          aperiam quas corrupti, sequi repellat dolor et laborum commodi. Illo
          rem officiis, enim ducimus alias minus ea quia eum mollitia
          consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Soluta, nulla? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Laboriosam illo obcaecati, eius quisquam tenetur voluptate
          corporis ex perspiciatis esse libero.
        </p>
      </div>

      <div className="bg-dark text-light">
        <ImageGallery />
      </div>

      <div className="my-5">
        <Reviews />
      </div>
    </div>
  );
};

export default About;
