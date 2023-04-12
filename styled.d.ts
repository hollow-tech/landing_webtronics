import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    gradient: string;
    linear2: string;
    clean: string;
    primary80: string;
    primary100: string;
    error: string;
    border: string;
    text: string;
    clean5: string;
    bg: string;
    linear3: string;

    device: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
    };
  }
}
