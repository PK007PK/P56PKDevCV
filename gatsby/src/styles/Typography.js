import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  body {    
    font-family: 'Raleway', sans-serif;
  }

  p, li {
    letter-spacing: 0.5px;
    font-weight: 300;
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-weight: 600;
    margin: 0;
  }

 
  h2 {
    font-size: var(--fontSizeBig2);
    margin-bottom: var(--spacingRegular);
  }

  h3 {
    font-size: var(--fontSizeBig1);
  }

  a {
    text-decoration-skip-ink: none;

    &:hover {
      text-decoration: none;
    }
  }

  ul {
    padding: 0;
  }

`;

export default Typography;
