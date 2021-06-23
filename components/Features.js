import {useEffect} from "react";
import styled from "styled-components";
import Card from "./Card";
import {cardContents as cards} from "../data/data";
import {mediaQry} from "../utils/utils";
import Entry from "../components/Entry";
import {motion,useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
const FeaturesWrapper = styled.div`
      background-color:var(--color-whitesmoke);
      padding:10rem 10rem 20rem;
      display:flex;
      flex-direction:column;
      > *:not(:last-child) {
      	margin-bottom:10rem;
      }
      ${mediaQry.lessThan("tablet")`
           padding:10rem 6rem 20rem;     
      `}
      ${mediaQry.lessThan("phone")`
           padding:10rem 2rem 20rem;     
      `}
`;
const FeaturesHeader = styled(motion.div)`
     text-align:center;
     h2 {
     	font-size:2.8rem;
     	font-weight:700;
     	letter-spacing:1px;
     	color:var(--color-tertiary);
     }
     p {
     	color:var(--color-text);
     	font-size:1.8rem;
     }
`;
const FeaturesBody = styled(motion.div)`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-gap:3.5rem;

    > :nth-child(2){
    	position:relative;
    	top:4rem;
    }
    > :nth-child(3){
    	position:relative;
    	top:8rem;
    }
    ${mediaQry.lessThan("tablet-small")`
         grid-template-columns:1fr;

    `}
`;

function Features() {
	const animation = useAnimation();
     const [featureRef,inView] = useInView({
     	triggerOnce:true,
     	
     });
     useEffect(() => {
     	if(inView) {
     		animation.start("show");
     	}
     },[animation,inView]);
	return (
		<FeaturesWrapper>
		    <Entry/>
			<FeaturesHeader
			    ref={featureRef}
			    animate={animation}
			    initial="hidden"
			    variants={{
			    	show:{
			    		opacity:1,
			    		y:0,
			    		transition:{
			    			ease:"easeIn",
			    			duration:.6
			    		}
			    	},
			    	hidden:{
			    		opacity:0,
			    		y:72
			    	}
			    }}
			>
				<h2>Advanced Statistics</h2>
				<p>
					Track how your links are performing across the web with<br/> our 
  					advanced statistics dashboard.
  				</p>
			</FeaturesHeader>
			<FeaturesBody
			   ref={featureRef}
			   animate={animation}
			   initial="hidden"
			   variants ={{
			   	show:{
			   		opacity:1,
			   		y:0,
			   		transition:{
			   			staggerChildren:.5
			   		}
			   	},
			   	hidden:{
			   	}
			   }}
			>
				{
					cards.map((card,index) => (
						<Card
						   key={index}
						   title={card.title}
						   text={card.text}
						   slug={card.slug}
						/>
					))
				}
			</FeaturesBody>
		</FeaturesWrapper>	
	)
}

export default Features;