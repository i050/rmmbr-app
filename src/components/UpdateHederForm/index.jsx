import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {updateDataInDatabase} from "../../services/apiFetcher";
import  { useMemoryWallContext } from "../../contexts/MemoryWallContexts"

const validationSchema = Yup.object().shape({
  title: Yup.string().required("שדה כותרת הוא שדה חובה"),
});

function UpdateHeaderForm({changeTitle, memoryWallId, index}) {
  const { memoryWalls, setMemoryWalls } = useMemoryWallContext();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });


  const onSubmit = (data) => {
    const endpoint = `http://localhost:3000/api/getMemoryWallById/${memoryWallId}/title`; // Replace with your actual endpoint
    const dataToUpdate = {
      title: data.title,
    };
    (async () => {
      try {
        const responseData = await updateDataInDatabase(endpoint, dataToUpdate);
        console.log("Data updated successfully. Response:", responseData);
        console.log(memoryWallId);
        memoryWalls[index].title = data.title;
        setMemoryWalls(memoryWalls);
        changeTitle(data.title);
      } catch (error) {
        console.error(error.message);
      }
    })();
  };
  

  return (
    <div className="container">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="title">
          <Form.Label><h3>:עריכת כותרת</h3></Form.Label>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Control
                type="text"
                className={errors.title ? "is-invalid" : ""}
                {...field}
              />
            )}
          />
          {errors.title && (
            <Form.Control.Feedback type="invalid">
              {errors.title.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button type="submit" className="mt-2" style={{backgroundColor: "#022855", color: "white"}}>
          שמירה
        </Button>
      </Form>
    </div>
  );
}

export default UpdateHeaderForm;