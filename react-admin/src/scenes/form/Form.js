// import { Box, Button,IconButton, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";
// import { useState } from "react";
// import "./style.css";
// import CloseIcon from '@mui/icons-material/Close';




// const Form = () => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");
//   const [modal, setModal] = useState(false);
//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   const handleFormSubmit = (values) => {
//     console.log(values);
//   };
//   return (
//     <>
//       <button className="btn-modal"  onClick={toggleModal}>Create New User</button>
//       {modal && (
//         <div className="modal">
//           <div className="overlay">
//             <div className="modal-content">
//               <Box m="20px">
//                 <Box display="flex" justifyContent="space-between">
//                   <Header
//                     title="CREATE USER"
//                     subtitle="Create a New User Profile"
                    
//                   />
//                  <IconButton onClick={toggleModal}>
//                     <CloseIcon />
//                   </IconButton>
//                 </Box>
                

//                 <Formik
//                   onSubmit={handleFormSubmit}
//                   initialValues={initialValues}
//                   validationSchema={checkoutSchema}
//                 >
//                   {({
//                     values,
//                     errors,
//                     touched,
//                     handleBlur,
//                     handleChange,
//                     handleSubmit,
//                   }) => (
//                     <form onSubmit={handleSubmit}>
//                       <Box
//                         display="grid"
//                         gap="30px"
//                         gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//                         sx={{
//                           "& > div": {
//                             gridColumn: isNonMobile ? undefined : "span 4",
//                           },
//                         }}
//                       >
//                         <TextField
//                           fullWidth
//                           variant="filled"
//                           type="text"
//                           label="First Name"
//                           onBlur={handleBlur}
//                           onChange={handleChange}
//                           value={values.firstName}
//                           name="firstName"
//                           error={!!touched.firstName && !!errors.firstName}
//                           helperText={touched.firstName && errors.firstName}
//                           sx={{ gridColumn: "span 2" }}
//                         />
//                         <TextField
//                           fullWidth
//                           variant="filled"
//                           type="text"
//                           label="Last Name"
//                           onBlur={handleBlur}
//                           onChange={handleChange}
//                           value={values.lastName}
//                           name="lastName"
//                           error={!!touched.lastName && !!errors.lastName}
//                           helperText={touched.lastName && errors.lastName}
//                           sx={{ gridColumn: "span 2" }}
//                         />
//                         <TextField
//                           fullWidth
//                           variant="filled"
//                           type="text"
//                           label="Email"
//                           onBlur={handleBlur}
//                           onChange={handleChange}
//                           value={values.email}
//                           name="email"
//                           error={!!touched.email && !!errors.email}
//                           helperText={touched.email && errors.email}
//                           sx={{ gridColumn: "span 4" }}
//                         />
//                         <TextField
//                           fullWidth
//                           variant="filled"
//                           type="text"
//                           label="Contact Number"
//                           onBlur={handleBlur}
//                           onChange={handleChange}
//                           value={values.contact}
//                           name="contact"
//                           error={!!touched.contact && !!errors.contact}
//                           helperText={touched.contact && errors.contact}
//                           sx={{ gridColumn: "span 4" }}
//                         />
//                         <TextField
//                           fullWidth
//                           variant="filled"
//                           type="text"
//                           label="Address 1"
//                           onBlur={handleBlur}
//                           onChange={handleChange}
//                           value={values.address1}
//                           name="address1"
//                           error={!!touched.address1 && !!errors.address1}
//                           helperText={touched.address1 && errors.address1}
//                           sx={{ gridColumn: "span 4" }}
//                         />
//                         <TextField
//                           fullWidth
//                           variant="filled"
//                           type="text"
//                           label="Address 2"
//                           onBlur={handleBlur}
//                           onChange={handleChange}
//                           value={values.address2}
//                           name="address2"
//                           error={!!touched.address2 && !!errors.address2}
//                           helperText={touched.address2 && errors.address2}
//                           sx={{ gridColumn: "span 4" }}
//                         />
//                       </Box>
//                       <Box display="flex" justifyContent="end" mt="20px">
//                         <Button
//                           type="submit"
//                           color="secondary"
//                           variant="contained"
//                           onClick={toggleModal}
//                         >
//                           Create New User
//                         </Button>
//                       </Box>
//                     </form>
//                   )}
//                 </Formik>
//               </Box>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//   firstName: yup.string().required("required"),
//   lastName: yup.string().required("required"),
//   email: yup.string().email("invalid email").required("required"),
//   contact: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .required("required"),
//   address1: yup.string().required("required"),
//   address2: yup.string().required("required"),
// });
// const initialValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   contact: "",
//   address1: "",
//   address2: "",
// };

// export default Form;

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export default function Form() {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}