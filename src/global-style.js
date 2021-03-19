import { createGlobalStyle } from "styled-components";
import { fontFace } from "./helpers/fonts";

export const GlobalStyle = createGlobalStyle`
  ${fontFace("LabGrotesque", "LabGrotesque-Regular", 400, "normal")}
  ${fontFace("LabGrotesque", "LabGrotesque-Medium", 500, "normal")}

  * {
    font-family: "LabGrotesque", "Arial", sans-serif;    
  }
`;