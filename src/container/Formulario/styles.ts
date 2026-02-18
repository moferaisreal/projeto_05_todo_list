import styled from "styled-components";
import * as variables from "../../styles/variables"

export const FormContainer = styled.form`
  max-width: 34rem;
  width: 100%;
  color: ${variables.default.textonlight};
  font-size: .875rem;
  font-weight: bold;
  background-color: ${variables.default.bgpage};
  textarea {
    resize: none;
    margin: 1rem 0;
  }
`;

export const Options = styled.div`
  margin-bottom: 1rem;
  p {
    margin-bottom: 0.5rem;
  }
  label {
    margin-right: 0.5rem;
  }
`;
export const Option = styled.div`
display: inline;
text-transform: capitalize;
`
