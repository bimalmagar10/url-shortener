import {useEffect} from "react";
import styled from "styled-components";
import Button from "./Button";
import {mediaQry} from "../utils/utils";
import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
const CTAWrapper = styled("div")`
      padding:7rem 10rem;
      background-color:var(--color-primary-2);
      background-image:url("/images/bg-boost-desktop.svg");
      background-size:cover;
      background-repeat:no-repeat;
      text-align:center;
      h2 {
      	font-size:3rem;
      	color:var(--color-white);
        margin-bottom:3rem;
      }
      ${mediaQry.lessThan("tablet")`
          padding:7rem 6rem;
      `}
       ${mediaQry.lessThan("phone")`
           padding:7rem 2rem;
           background-image:url("/images/bg-boost-mobile.svg");    
      `}
`;

function CTA() {
	return (
		<CTAWrapper>
			<h2>Book Your Links Today</h2>
			<Button 
         name="Get started" 
         bgcolor="true" 
         padding="1rem 3rem" 
         hover="true"
      />
		</CTAWrapper>
	)
}

export default CTA;