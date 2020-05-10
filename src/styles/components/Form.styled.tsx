import styled from 'styled-components';

export const StyledForm = styled.form`
  font-size: 0.85rem;
  font-weight: bold;

  div.button-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
      color: ${(props): string => props.theme.colorTertiary};
      letter-spacing: 1px;
      cursor: pointer;
  
      &.signup {
        float: right;
      }
  
      &.active {
        color: ${(props): string => props.theme.colorPrimary};
      }
  
      :hover {
        color: ${(props): string => props.theme.colorPrimary};
      }
    }
  }

  input {
    border-radius: 3px;
    display: block;
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
    background: linear-gradient(180deg, #3498DB 0%, #1468AB 100%);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.44);
    cursor: pointer;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 1.75rem;
    font-size: 0.85rem;
    width: 100%;
    position: relative;
    transition: all 0.5s;

    :hover {
      background: linear-gradient(0deg, #386 0%, rgba(95,180,146,1) 100%);
    }
  }
`;
