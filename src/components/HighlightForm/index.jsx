import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Form, Button, Container, Row, Col } from "react-bootstrap"; // Import React Bootstrap components
import { useState, useEffect } from "react";
import {postDataToDatabase} from "../../services/apiFetcher"
//import { memoryWall } from "../../assets/DB"; //for example
// import "./index.css";

const HighlightForm = ({ onAddHighlight, highlightsNews,memoryWallId }) => {
  console.log("form highlightsNews", highlightsNews);
  const schema = Yup.object().shape({
    date: Yup.date().required("שדה תאריך הוא שדה חובה"),
    title: Yup.string().required("שדה כותרת הוא שדה חובה"),
    text: Yup.string().required("שדה טקסט הוא שדה חובה"),
    image: Yup.string().required("שדה תמונה הוא שדה חובה"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      date: "",
      title: "",
      text: "",
      image: "",
    },
  });

  // const memoryWallLocalStorage = JSON.parse(
  //   localStorage.getItem("memoryWallData")
  // );

  const [highlightTempId, setHighlightTempId] = useState(
    highlightsNews.length + 1
  );
  
  // const postData = {
  //   // המידע שברצונך לשלוח בבקשה
  // };
  
  const handleFormSubmit = (data) => {
    const endpoint = `http://localhost:3000/api/getMemoryWallById/${memoryWallId}/highlightsNews`;

    console.log(data);
    setHighlightTempId(highlightTempId + 1); //for example
    const newHighlight = {
      id: highlightTempId.toString(),
      title: data.title,
      text: data.text,
      image: data.image,
      date: new Date(data.date).toLocaleDateString(),
    };
    postDataToDatabase(endpoint, newHighlight)
  .then((responseData) => {
    console.log("נתונים נשלחו בהצלחה:", responseData);
  })
  .catch((error) => {
    console.error("שגיאה בשליחת הנתונים:", error);
  });
    onAddHighlight(newHighlight);
    reset();
  };

  return (
    <Container className="bg-and-font-color container" style={{ width: "97%" }}>
      <Row className="bg-and-font-color">
        <Col className="bg-and-font-color">
          <Form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="bg-and-font-color"
          >
            <Form.Group controlId="date" className="bg-and-font-color">
              <Form.Label className="bg-and-font-color">:תאריך</Form.Label>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    type="date"
                    {...field}
                    isInvalid={!!errors.date}
                  />
                )}
              />
              {errors.date && (
                <Form.Control.Feedback type="invalid">
                  {errors.date.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="title" className="bg-and-font-color">
              <Form.Label className="bg-and-font-color">:כותרת</Form.Label>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    type="text"
                    {...field}
                    isInvalid={!!errors.title}
                  />
                )}
              />
              {errors.title && (
                <Form.Control.Feedback type="invalid">
                  {errors.title.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="text" className="bg-and-font-color">
              <Form.Label className="bg-and-font-color">:טקסט</Form.Label>
              <Controller
                name="text"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    as="textarea"
                    {...field}
                    isInvalid={!!errors.text}
                  />
                )}
              />
              {errors.text && (
                <Form.Control.Feedback type="invalid">
                  {errors.text.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="image" className="bg-and-font-color">
              <Form.Label className="bg-and-font-color">:תמונה</Form.Label>
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <div>
                    <Form.Control
                      type="text"
                      {...field}
                      isInvalid={!!errors.image}
                    />
                    {errors.image && (
                      <Form.Control.Feedback type="invalid">
                        {errors.image.message}
                      </Form.Control.Feedback>
                    )}
                  </div>
                )}
              />
            </Form.Group>

            <Button
              className="highlight-button"
              variant="primary"
              type="submit"
              style={{
                marginTop: "3%",
                backgroundColor: "#00b3bf",
                border: "none",
              }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default HighlightForm;