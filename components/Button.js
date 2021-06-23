import styled ,{css}from "styled-components";
import Link from "next/link";
import {motion} from "framer-motion";
export const btnStyles = css`
	  cursor:pointer;
	  font-size:1.6rem;
	  background-color:${props => (props.bgcolor === "true" ? "var(--color-primary-1)" :"none")};
	  color:${props => (props.bgcolor === "true" ? "var(--color-white)":"var(--color-text)")};
	  padding:${props => props.padding};
	  align-self:flex-start;
`;
const Btn = styled(motion.a)`
         ${btnStyles}
	  text-decoration: none;
	  border-radius:100px;
	  font-weight: 500;
	  transition:opacity .2s ease;
	  :hover {
	      opacity:${({hover}) => (hover === "true" ? ".7" :"1")};
	  }
`;
function Button({name,bgcolor="false",padding,hover,variants}) {
	return (
		<Link href="">
			<Btn
				variants={variants} 
				bgcolor={bgcolor} 
				padding={padding} 
				hover={hover}
			>{name}</Btn>
		</Link>
	)
}


export default Button;