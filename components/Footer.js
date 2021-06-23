import styled from "styled-components";
import Link from "next/link";
import {mediaQry} from "../utils/utils";
const FooterWrapper = styled("footer")`
      display:grid;
      grid-template-columns:1fr 2fr 1fr;
      grid-column-gap:10rem;
      padding:7rem 10rem 10rem;
      background-color:var(--color-quinary);
      color:var(--color-white);
      svg {
      	width:120px;
      	height:100%;
		fill:#fff;
		-webkit-fill:#fff;
		${mediaQry.lessThan("tablet-small")`
		    justify-self:center;
		`}
      }
      ${mediaQry.lessThan("laptop-small")`
          grid-column-gap:3rem;
      `}
      ${mediaQry.lessThan("tablet")`
          padding:7rem 6rem 10rem;
      `}
      ${mediaQry.lessThan("tablet-small")`
          grid-template-columns:1fr;
          grid-template-rows:5rem auto min-content;
          grid-column-gap:0;
          grid-row-gap:5rem;
      `}
      ${mediaQry.lessThan("phone")`
          padding:7rem 2rem 10rem;
     `}
`;
const ListContainer = styled("div")`
      display:flex;
      justify-content:space-between;
      // > *:not(:last-child) {
      // 	    margin-right:4rem;
      //       ${mediaQry.lessThan("laptop-small")`
      //            margin-right:5rem; 
      //       `}
      //       ${mediaQry.lessThan("tablet")`
      //           margin-right:3rem;
      //       `}
      //        ${mediaQry.lessThan("tablet-small")`
      //           margin:0 0 3rem;
      //       `}
      // }
     
      ul {  
      	font-size:1.6rem;
      	list-style:none;
        width:100%;
      	h3 {
      		margin-bottom:2rem;
      	}
      	li {
      		color:var(--color-text);
      		line-height:2;
      	}
      }
      img {
      	height:100%;
      	width:100%;

      }
      a {
      	text-decoration:none;
      	color:var(--color-text);
      	:hover {
      		color:var(--color-primary-1);
      	}
      }
      ${mediaQry.lessThan("tablet-small")`
           text-align:center;
           flex-direction:column;
           align-items:center;
      `}
`;
const SocialLinks = styled("div")`
      display:flex;
      justify-content:space-evenly;
      align-items:flex-start;
      > *:not(:last-child) {
      	margin-right:.5rem;
      }
      a {
      	height:2rem;
      	width:2rem;
      	display:flex;
      	align-items:center;

      }
`;

function Footer() {
	return (
				<FooterWrapper>
					<svg>
					     <use href="/images/logo.svg#logo"/>
					</svg>
					<ListContainer>
						<ul>
						    <h3>Features</h3>
						    <li><Link href="#"><a>Link Shortening</a></Link></li>
						    <li><Link href="#"><a>Branded Links</a></Link></li>
							<li><Link href="#"><a>Analytics</a></Link></li>
						</ul>
						<ul>
						    <h3>Resources</h3>
							<li><Link href="#"><a>Blog</a></Link></li>
							<li><Link href="#"><a>Developers</a></Link></li>
							<li><Link href="#"><a>Support</a></Link></li>
						</ul>
						<ul>
						    <h3>About</h3>
							<li><Link href="#"><a>Out Team</a></Link></li>
							<li><Link href="#"><a>Careers</a></Link></li>
							<li><Link href="#"><a>Contact</a></Link></li>
						</ul>
					</ListContainer>
					<SocialLinks>
						<Link href="#">
							<a><img src="/images/icon-facebook.svg" alt="Facebook Icon"/></a>
						</Link>
						<Link  href="#">
							<a><img src="/images/icon-twitter.svg" alt="Twitter Icon"/></a>
						</Link>
						<Link  href="#">
							<a><img src="/images/icon-pinterest.svg" alt="Pinterest Icon"/></a>
						</Link>
						<Link  href="#">
							<a href=""><img src="/images/icon-instagram.svg" alt="Instagram Icon"/></a>
						</Link>
					</SocialLinks>
				</FooterWrapper>
	)
}

export default Footer