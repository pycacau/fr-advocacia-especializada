import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background:
            linear-gradient(135deg, #001122 0%, #002244 50%, #001122 100%),
            radial-gradient(circle at 20% 80%, rgba(145, 145, 145, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(107, 107, 107, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(145, 145, 145, 0.05) 0%, transparent 50%);
        background-attachment: fixed;
        color: #fff;

        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
    }

    html {
        @media (max-width: 1088px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
        border-radius: 8px;
        width: 0.5rem;
        background: linear-gradient(180deg, #001122, #002244);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: linear-gradient(180deg, #919191, #6b6b6b);
        box-shadow: inset 0 0 10px rgba(145, 145, 145, 0.5);
  }
    }

    body, input, textarea, button {
        font-family: 'roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1 {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 4rem;
        line-height: 125%
    }

    li {
            list-style-type: none;
    }

    a {
        text-decoration: none;

    }
`