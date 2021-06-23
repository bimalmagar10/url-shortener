import React,{useState} from 'react'
import styled from "styled-components";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Formik} from "formik";
import Form from "./Form";
import {btnStyles} from "./Button";
import {mediaQry} from "../utils/utils";
import {validationSchema} from "../utils/utils";
import {motion} from "framer-motion";

const EntryWrapper = styled.div`
      width:100%;
      display:flex:
      flex-direction:column;
      margin:-17rem auto 0 auto;
      > *:not(:last-child) {
      	margin-bottom:2rem;
      }
`;
const NewLink= styled(motion.div)`
     display:flex;
     justify-content:space-between;
     align-items:center;
     baclground:var(--color-white);
     width:100%;
     padding:2rem 3rem;
     font-size:1.6rem;
     background-color:var(--color-white);
     border-radius:10px;
     opacity:0;
     transform:translateY(200%);
     > div {
        display:flex;
        align-items:center;
        > *:not(:last-child){
        	margin-right:1.5rem;
            ${mediaQry.lessThan("tablet-small")`
                margin:0 0 2rem;
            `}
        }
        span {
        	color:var(--color-primary-1);
        }
        ${mediaQry.lessThan("tablet-small")`
            flex-direction:column;
        `}
     }
     a {
     	border-radius:5px;
     }
     ${mediaQry.lessThan("tablet-small")`
        flex-direction:column;
        * {
            width:100%;
        }
        span {
            margin-bottom:2rem;
        }
        div > a {
            text-align:center;
        }
    `}
`;
const CopyBtn = styled.button`
    ${btnStyles}
    outline:none;
    border:none;
    border-radius:5px;
    background-color:${({copied}) => copied ? "var(--color-primary-2)":"var(--color-primary-1)"};
    transition:opacity .2s ease:
    :hover {
        opacity:${({copied}) => copied ?"1":".7"};
    }
`;

function Entry() {
    const [state,setState] = useState([]);

    const shortenLink = async (values,setSubmitting,resetForm) => {
        try {
            const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${values.query}`);
            const result = await res.json();

            const links = {
                originalLink:result.result["original_link"],
                shortLink:result.result["full_short_link"],
                copied:false
            };

            setState(state => ([...state,links]));
            
        } catch(err) {
            alert("Error shortening the URL!");
        }
        setSubmitting(false);
        resetForm({query:""});
        
    };

	return (
		<EntryWrapper>
            <Formik
                initialValues={{query:""}}
                validationSchema={validationSchema}
                onSubmit={(values,{setSubmitting,resetForm}) => {
                    shortenLink(values,setSubmitting,resetForm);
                }}
            >
                <Form/>
            </Formik>
            {state.length > 0 ?(
                state.map((link,index) => (
                    <NewLink 
                       key={index}
                       initial={{y:"50%"}}
                       animate={{opacity:1,y:"0%"}}
                       transition={{ ease: "easeOut", duration:1}}
                    >
                        <span>{link.originalLink}</span>
                        <div>
                              <span>{link.shortLink}</span>
                              <CopyToClipboard 
                                  text={link.shortLink}
                                  onCopy={() => {
                                     const newArr = [...state];
                                     newArr[index].copied = true;
                                     setState(newArr);
                                  }}
                              >
                                   <CopyBtn
                                      bgcolor="true"
                                      padding=".5rem 2rem"
                                      copied={state[index].copied}
                                      disabled={state[index].copied}
                                   >
                                     {state[index].copied ? "Copied!":"Copy"}
                                   </CopyBtn>
                              </CopyToClipboard>
                        </div>
                    </NewLink>
                ))
            ):null}
		</EntryWrapper>
	)
}

export default Entry;