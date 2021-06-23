import {generateMedia} from "styled-media-query";
export const cardContents = [
   {
   	title:"Brand Recognition",
   	text:`
   	Boost your brand recognition with each click. Generic links don’t 
      mean a thing. Branded links help instil confidence in your content.`,
      slug:"icon-brand-recognition"
   },
   {
   	title:"Detailed Records",
   	text:`
   	  Gain insights into who is clicking your links. Knowing when and where 
      people engage with your content helps inform better decisions.
   	`,
      slug:"icon-detailed-records",
   },
   {
   	title:"Fully Customizable",
   	text:`
   	  Improve brand awareness and content discoverability through customizable 
      links, supercharging audience engagement.
   	`,
      slug:"icon-fully-customizable",
   }
];

export const mediaQry = generateMedia({
   "laptop-large":"80em",
   "laptop-small":"64em",
   "tablet":"50em",
   "tablet-small":"43.75em",
   "phone":"31.25em"
});