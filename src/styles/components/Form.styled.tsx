import styled from 'styled-components';

export const StyledForm = styled.form`
  font-size: 0.85rem;
  font-weight: bold;

  label {
    color: ${(props): string => props.theme.primary};
  }

  input {
    display: block;
    border-radius: 3px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 15px;
    border: 0;
    font-weight: 300;
    min-width: 250px;
  }

  input[type=text], input[type=password] {
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.25), inset 0 -1px 2px rgba(0,0,0,0.25);
    font-size: 1.3rem;

    :focus {
      background: #CFFFDD;
    }
  }

  input[type=submit] {
    width: 100%;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.44);
    font-weight: bold;
    color: white;
    background: #5A8;
    line-height: 1.75rem;
    font-size: 0.85rem;
  }
`;
