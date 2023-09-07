import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styled from "styled-components";

const HighlightFormWrapper = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 20px;
`;

const HighlightForm = ({ onAddHighlight }) => {
  const schema = Yup.object().shape({
    date: Yup.date().required("שדה תאריך הוא שדה חובה"),
    title: Yup.string().required("שדה כותרת הוא שדה חובה"),
    text: Yup.string().required("שדה טקסט הוא שדה חובה"),
    image: Yup.string().required("שדה תמונה הוא שדה חובה"),
  });

  const { handleSubmit, control, formState, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      date: "",
      title: "",
      text: "",
      image: "",
    },
  });

  const { errors } = formState;

  const [highlightTempId, setHighlightTempId] = useState(10);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleFormSubmit = (data) => {
    setHighlightTempId(highlightTempId + 1);
    const newHighlight = {
      id: highlightTempId.toString(),
      title: data.title,
      text: data.text,
      image: data.image,
      date: new Date(data.date).toLocaleDateString(),
    };

    onAddHighlight(newHighlight);

    reset();
    setIsFormVisible(false);
  };

  return (
    <HighlightFormWrapper>
      <h2>הוספת עדכון חדש</h2>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={`form ${isFormVisible ? "form-visible" : "form-hidden"}`}
      >
        <div className="form-group">
          <label>תאריך:</label>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <input
                type="date"
                {...field}
                className={`form-control ${errors.date ? "is-invalid" : ""}`}
              />
            )}
          />
          {errors.date && (
            <div className="invalid-feedback">{errors.date.message}</div>
          )}
        </div>
        <div className="form-group">
          <label>כותרת:</label>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                className={`form-control ${errors.title ? "is-invalid" : ""}`}
              />
            )}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title.message}</div>
          )}
        </div>
        <div className="form-group">
          <label>טקסט:</label>
          <Controller
            name="text"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                className={`form-control ${errors.text ? "is-invalid" : ""}`}
              />
            )}
          />
          {errors.text && (
            <div className="invalid-feedback">{errors.text.message}</div>
          )}
        </div>
        <div className="form-group">
          <label>תמונה:</label>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <div>
                <input
                  type="text"
                  {...field}
                  className={`form-control ${errors.image ? "is-invalid" : ""}`}
                />
                {errors.image && (
                  <div className="invalid-feedback">{errors.image.message}</div>
                )}
              </div>
            )}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          הוסף
        </button>
      </form>
    </HighlightFormWrapper>
  );
};

export default HighlightForm;





// import React ,{useState} from "react";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

// const HighlightForm = ({highlightsNews}) => {
//   const schema = Yup.object().shape({
//     date: Yup.date().test
//     (

//       "date",
//       "date is required",
//       function (value) {
//         return value !== "kk";
//       }

//     )

//     .required("שדה תאריך הוא שדה חובה"),

//     title: Yup.string().required("שדה כותרת הוא שדה חובה"),
//     text: Yup.string().required("שדה טקסט הוא שדה חובה"),
//     image: Yup.string().required("שדה תמונה הוא שדה חובה"),
//   });

//   const { handleSubmit, control, formState, reset } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       date:
//       {

//       }

//       ,
//       title: "",
//       text: "",
//       image: "",
//     },
//   });

//   const { errors } = formState;

// const [highlightTempId, setHighlightTempId] = useState(10);

//   const handleFormSubmit = (data) => {
//     console.log(highlightsNews);

//     console.log(data);
//     setHighlightTempId(highlightTempId + 1);
//     highlightsNews.push({
//       id: highlightTempId.toString(),
//       title: data.title,
//       text: data.text,
//       image: data.image,
//       date: new Date(data.date).toLocaleDateString(),

//     }
//     );
//     console.log(highlightsNews);

//     reset(); // Reset the form after submission
//   };

//   return (
//     <form onSubmit={handleSubmit(handleFormSubmit)}>
//       <div className="form-group">
//         <label>תאריך:</label>
//         <Controller
//           name="date"
//           control={control}
//           render={({ field }) => (
//             <input
//               type="date"
//               {...field}
//               className={`form-control ${errors.date ? "is-invalid" : ""}`}
//             />
//           )}
//         />
//         {errors.date && (
//           <div className="invalid-feedback">{errors.date.message}</div>
//         )}
//       </div>
//       <div className="form-group">
//         <label>כותרת:</label>
//         <Controller
//           name="title"
//           control={control}
//           render={({ field }) => (
//             <input
//               type="text"
//               {...field}
//               className={`form-control ${errors.title ? "is-invalid" : ""}`}
//             />
//           )}
//         />
//         {errors.title && (
//           <div className="invalid-feedback">{errors.title.message}</div>
//         )}
//       </div>
//       <div className="form-group">
//         <label>טקסט:</label>
//         <Controller
//           name="text"
//           control={control}
//           render={({ field }) => (
//             <textarea
//               {...field}
//               className={`form-control ${errors.text ? "is-invalid" : ""}`}
//             />
//           )}
//         />
//         {errors.text && (
//           <div className="invalid-feedback">{errors.text.message}</div>
//         )}
//       </div>
//       <div className="form-group">
//         <label>תמונה:</label>
//         <Controller
//           name="image"
//           control={control}
//           render={({ field }) => (
//             <div>
//               <input
//                 type="text"
//                 {...field}
//                 className={`form-control ${errors.image ? "is-invalid" : ""}`}
//               />
//               {errors.image && (
//                 <div className="invalid-feedback">{errors.image.message}</div>
//               )}
//             </div>
//           )}
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default HighlightForm;
