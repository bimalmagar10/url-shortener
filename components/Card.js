import {useEffect} from "react";
import styled from "styled-components";
import Circle from "./Circle";
import {mediaQry} from "../utils/utils";
import {motion,useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
const CardWrapper = styled(motion.div)`
    position:relative;
    display:inline-block;
    padding:8rem 2.5rem 3.5rem;
    border-radius:5px;
    background-color:var(--color-white);
    h3 {
    	font-size:2.5rem;
    	color:var(--color-tertiary);
    	margin-bottom:1rem;
    }
    p {
    	color:var(--color-text);
    	font-size:1.6rem;
    }
    ${mediaQry.greaterThan("43.8125em")`
            :not(:first-child)::after {
		    	content:"";
		    	position:absolute;
		    	top:50%;
		    	right:100%;
		    	height:5px;
		    	width:3.5rem;
		    	background-color:var(--color-primary-1);
           }
    `}
    
     ${mediaQry.lessThan("tablet-small")`
			:not(:last-child)::after {
				content:"";
				position:absolute;
				top:100%;
				right:50%;
				height:3.5rem;
				width:5px;
	    	    background-color:var(--color-primary-1);
            }
            text-align:center;
              
      `}

`;

function Card({title,text,slug}) {
	const animation = useAnimation();
	const [cardRef,inView] = useInView({
		triggerOnce:true,
		
	});
	useEffect(() => {
        if(inView) {
        	animation.start("show");
        }
	},[inView,animation]);
	return (
		<CardWrapper
		   ref={cardRef}
		   animate={animation}
		   initial="hidden"
		   variants={{
		   	show:{
		   		opacity:1,
		   		y:0,
		   		transition:{
		   			duration:1,
		   			ease:"easeIn"
		   		}
		   	},
		   	hidden:{
		   		opacity:0,
		   		y:70
		   	}
		   }}
		>
	       	<Circle slug={slug}/> 
			<h3>{title}</h3>
			<p>
				{text}
			</p>
		</CardWrapper>
	)
}

export default Card;