import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  gradient:
    "linear-gradient(152.14deg, rgba(21, 191, 253, 0.7) 9.96%, rgba(156, 55, 253, 0.7) 100%)",
  linear2: "linear-gradient(180deg, #1FF2FF 0%, #27F9E5 52.66%, #2FFFCD 100%)",
  clean: "#FFFFFF",
  primary80: "#3B48D0",
  primary100: "#0A1482",
  error: "#FD4646",
  border: "#636363",
  text: "#A2CBFB",
  clean5: "rgba(255, 255, 255, 0.05)",
  bg: "#0C102D",
  linear3:
    "linear-gradient(90deg, rgba(21, 191, 253, 0) 8.03%, rgba(21, 191, 253, 0.7) 69.15%, rgba(156, 55, 253, 0.7) 97.95%)",

  device: {
    mobileS: `(max-width: 320px)`,
    mobileM: `(max-width: 375px)`,
    mobileL: `(max-width: 425px)`,
    tablet: `(max-width: 768px)`,
    laptop: `(max-width: 1024px)`,
    laptopL: `(max-width: 1800px)`,
    desktop: `(max-width: 2560px)`,
  },
};
