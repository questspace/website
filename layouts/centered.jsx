import styled from 'styled-components'
import theme from '../utils/theme'

export default styled.div`
  a {
    text-decoration: none;
  }

  main {
    width: 700px;
    margin: ${theme.space}px auto;
    @media (max-width: ${theme.mediaQueryBig}) {
      width: 600px;
    }
    @media (max-width: ${theme.mediaQueryMedium}) {
      width: 315px;
    }
    @media (max-width: ${theme.mediaQuerySmall}) {
      width: 270px;
    }
  }

  .footer {
    @media (max-width: ${theme.mediaQueryBig}) {
      width: 600px;
    }
    @media (max-width: ${theme.mediaQueryMedium}) {
      width: 315px;
      flex-flow: column wrap;
      margin-bottom: 30px;
    }
    @media (max-width: ${theme.mediaQuerySmall}) {
      width: 270px;
    }
  }
`
