import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
  div {
    background: #202020;
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    color: #fff;
    border: solid 1px #50c878;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-shadow: 0 0 0.2em #f5f5f5;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
    color: #9f9fa9;
  }
  span {
    color: #50c878;
  }
`
