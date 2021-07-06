import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  body {    
    font-family: 'Raleway', sans-serif;
    font-size: 1.6rem;
    line-height: 2;
  }

  p, li {
    letter-spacing: 0.5px;
    font-weight: 300;
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-weight: 600;
    margin: 0;
  }

  strong {
    font-weight: 600;
  }
 
  h2 {
    font-size: var(--fontSizeBig2);
    margin-bottom: var(--spacingRegular);
    
  }

  h3 {
    font-size: var(--fontSizeLead);
    line-height: 1.25;

    ${({ theme }) => theme.media.smAbove} {
      font-size: var(--fontSizeBig1);
        }
  }

  a {
    text-decoration-skip-ink: none;

    &:hover {
      text-decoration: none;
    }
  }

  ul {
    padding: 0;
    padding-left: 15px;
    margin-left: 10px;
  }

`;

export default Typography;
