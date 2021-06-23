import styled,{css} from "styled-components";
import Button from "./Button";
import {mediaQry} from "../utils/utils";
import {motion} from "framer-motion";

const HeaderWrapper = styled.header`
    padding:4rem 10rem;
    height:80vh;
    display:flex;
    flex-direction:column;
    background:no-repeat 50% url("/images/illustration-working.svg");
    background-position:right -40px top 100px;
    @media only screen and (min-width:1500px){
        height:auto;
    }
    > *:first-child {
    	margin-bottom:15rem;
    	 ${mediaQry.lessThan("phone")`
           margin-bottom:40rem;
       `}
    }
    margin-bottom:10rem;
    ${mediaQry.lessThan("tablet")`
        padding:4rem 6rem;
    `}
    ${mediaQry.lessThan("tablet-small")`
        background-position:right -40px top 50%;
        background-size:60%;
        height:auto;
    `}
     ${mediaQry.lessThan("phone")`
        background-position:right -40px top 30%;
        background-size:100%;
        padding:4rem 2rem;
    `}
`;
const NavWrapper = styled.nav`
     display:flex;
     justify-content:space-between;
     align-items:center;
     height:100%;
`;
const NavLeft = styled.div`
      display:flex;
      align-items:center;
      > *:not(last-child) {
      	margin-right:3rem;
      }
      ul {
      	display:flex;
      	list-style:none;
      	li {
      		:not(last-child){
      			margin-right:1.5rem;
      		}
      	}
      	${mediaQry.lessThan("tablet-small")`
      	    display:none;
      	`}
      }
`;
const NavRight = styled.div`
     ${mediaQry.lessThan("tablet-small")`
          > * {
          	display:none;
          }
     `}
`;
const HeroWrapper = styled(motion.div)`
      display:flex;
      flex-direction:column;
      ${mediaQry.lessThan("phone")`
         align-items:center;
         text-align:center;
         a {
         	align-self:center;
         }
      `}
      h1 {  
      	font-size:6rem;
      	font-weight:700;
      	line-height:1.1;
      	color:var(--color-tertiary);
      	${mediaQry.lessThan("tablet-small")`
      	    font-size:4rem;
      	`}
      }
      p {
      	width:40%;
      	font-size:1.8rem;
      	color:var(--color-text);
      	 ${mediaQry.lessThan("phone")`
                 width:100%;
            `}
      }
      > *:not(:last-child) {
      	margin-bottom:2rem;
      }
`;
const fixing = css`
    display:inline-block;
    width:30px;
    height:4px;
    border-radius:5px;
    background-color:var(--color-text);
`;
const MobileNav = styled.div`
    position:relative;
    ${fixing}
    ::after,::before {
    	${fixing}
    	content:"";
      position:absolute;
      left:0;
    }
    ::after {
      top:1rem;
    }
    ::before {
      top:-1rem;
    }
    display:none;
    ${mediaQry.lessThan("tablet-small")`
       display:inline-block;
    `}
`;
const container = {
    hidden:{
        
    },
    show:{
        opacity:1,
        transition:{
            staggerChildren:0.5
        }
    }
};
const items = {
    hidden:{
        opacity:0,
        y:"10%"
    },
    show:{
        opacity:1,
        y:"0%",
        transition:{
            duration:.4,
            ease:"easeIn"
        }
    }
};

const Header = () => {
	return (
		<HeaderWrapper>
			<NavWrapper>
				<NavLeft>
					<img src="/images/logo.svg" alt="This is LOGO"/>
					<ul>
						<li>
						      <Button name="Features"/>
						</li>
						<li>
							<Button name="Resources"/>
						</li>
						<li>
							<Button name="Pricing"/>
						</li>
					</ul>
				</NavLeft>
				<NavRight>
					<Button name="Login" padding="1rem 2rem"/>
					<Button name="Sign Up" bgcolor="true" padding="1rem 2rem" hover="true"/>
				</NavRight>
				<MobileNav>
				  &nbsp;
				</MobileNav>
			</NavWrapper>
			<HeroWrapper
               variants={container}
               initial="hidden"
               animate="show"
            >
				<motion.h1
                   variants={items}
                >
                    More than just<br/>shorter links
                </motion.h1>
				<motion.p
                   variants={items}
                >
					Build your brand’s recognition and get detailed insights 
  					on how your links are performing.
  				</motion.p>
  				<Button variants={items} name="Get started" bgcolor="true" padding="1rem 2.5rem" hover="true"/>
			</HeroWrapper>
		</HeaderWrapper>
	)
}

export default Header;