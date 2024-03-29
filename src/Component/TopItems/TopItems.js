import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import TopItem from "./TopItem/TopItem";
import "./TopItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const TopItems = () => {
  const [items, setItems] = useState([]);
  const [data, setData] = useState(false);
  console.log(items);

  useEffect(() => {
    fetch("https://depot-warehouse.onrender.com/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setData(true);
      });
  }, []);

  let navigate = useNavigate();
  const goToManageItems = () => {
    navigate("/manageItems");
  };

  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold text-color mt-5 item-header">
        Top Items We Store
      </h1>
      <hr
        className="mb-5 mx-auto"
        style={{
          height: "5px",
          color: "#002266",
          width: "100px",
          borderRadius: "5px",
        }}
      />
      {data ? (
        <>
          <Row xs={1} md={3} className="g-4">
            {items.map((item) => (
              <TopItem key={item._id} item={item}></TopItem>
            ))}
          </Row>
          <Button
            onClick={goToManageItems}
            className="fw-bold ms-auto d-block mt-5"
            variant="primary"
          >
            Manage Items <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default TopItems;
