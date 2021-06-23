import Head from "next/head";
import styled from "styled-components";
const LayoutWrapper = styled.div`
   max-width:1440px;
   margin:0 auto;
`;

function Layout({children}) {
	return (
		<LayoutWrapper>
			<Head>
			  	 <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
				 <meta charSet="UTF-8"/>
  				 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  				 <meta name="description" content="URL shortener to shorten your url or link"/>
  				 <meta property="og:title" content="URL Shortener"/>
  				 <meta property="og:type" content="website"/>
			</Head>
			{children}
		</LayoutWrapper>
	)
}

export default Layout;