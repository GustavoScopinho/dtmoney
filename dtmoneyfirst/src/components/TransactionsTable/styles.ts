import styled from "styled-components";

export const Container = styled.div`
margin-top: 4rem;

table {
  width: 100%;
  border-spacing: 0 0.5rem;
  
  th {
    color: #7C7C8A;
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: #29292E;
    color: #C4C4CC;
    border-radius: 0.25rem;

    &:first-child{
      color: var(--text-title);
    }

    &.deposit{
      color: var(--green);
    }

    &.withdraw{
      color: var(--red);
    }
  }
}


`;