import {useEffect} from "react";
import styled from "styled-components";
import {btnStyles} from "./Button";
import {mediaQry} from "../utils/utils";

import {Field,Form as FormikForm,useFormikContext,ErrorMessage,useField} from "formik";
import {motion} from "framer-motion";

const FormWrapper = styled(FormikForm)`
     position:relative;
     background-image:url("/images/bg-shorten-desktop.svg");
     background-repeat:no-repeat:
     background-size:cover;
     background-color:var(--color-primary-2);
     padding:5rem 6rem;
     display:flex;
     justify-content:center;
     width:100%;
     border-radius:10px;
     ${mediaQry.lessThan("tablet-small")`
          flex-direction:column;
          padding:4rem;
     `}
     ${mediaQry.lessThan("phone")`
          flex-direction:column;
          padding:3rem 2rem;
          background-image:url("/images/bg-shorten-mobile.svg");
     `}
`;
const Input = styled("input").attrs(props => ({
	type:"text"
}))`
      flex:0 0 80%;
      padding:1.5rem 3rem;
      border:none;
      outline:none;
      font-size:1.6rem;
      border-radius:10px;
      margin-right:1.5rem;
      ::placeholder {
      	color:var(--color-text);
      }
      ${mediaQry.lessThan("tablet-small")`
          flex:0 0 100%;
          margin:0 0 2rem;
          border:${({error}) => error ? "2px solid var(--color-secondary)" :"none"};
      `}
`;
export const SubmitBtn = styled("button").attrs(props => ({
	type:"submit"
}))`
      ${btnStyles}
	  border-radius:10px;
	  border:none;
	  outline:none;
	  font-weight: 700;
      ${mediaQry.lessThan("tablet-small")`
         width:100%;
      `}
      transition:brightness .2s ease;
      :hover {
        filter:brightness(1.1);
      }
`;
const ErrorMsg = styled(motion.div)`
     font-style:italic;
     position:absolute;
     bottom:2rem;
     left:9rem;
     color:var(--color-secondary);
     font-size:1.8rem;
     ${mediaQry.lessThan("laptop-small")`
        left:6rem;
     `}
     ${mediaQry.lessThan("laptop-small")`
        display:none;
     `}

`;
function Form() {
    const {isSubmitting} = useFormikContext();
    const [value,meta] = useField({name:"query"});
	return (
          
            <FormWrapper>
                <Field placeholder="Shorten a link here..." name="query" as={Input} error={meta.touched && meta.error}/>
                {meta.touched && meta.error ? (
                     <ErrorMsg
                        animate={{ x:[10,0,10,0,10,0] }} 
                        transition={{
                          duration:.5,
                          ease:"easeIn"
                        }}
                     >{meta.error}</ErrorMsg>
                ):null}
                <SubmitBtn bgcolor="true" padding="1.5rem 3.5rem" disabled={isSubmitting || meta.error}>
                  {isSubmitting ? "Shortening....":"Shorten it!"}
                </SubmitBtn>
            </FormWrapper>
	)
}

export default Form