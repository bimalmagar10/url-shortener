import * as Yup from "yup";
import {generateMedia} from "styled-media-query";

export const validationSchema =Yup.object({
    query:Yup
    .string()
    .matches(/((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,"Please enter a valid url")
    .required('Please add a link')
});

export const mediaQry = generateMedia({
   "laptop-small":"64em",
   "tablet":"50em",
   "tablet-small":"43.75em",
   "phone":"31.25em"
});