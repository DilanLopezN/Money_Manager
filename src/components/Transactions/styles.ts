import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;
  table {
    width: 100%;
    border-spacing: 0.5rem;
    color: #fff;

    th {
      color: #9f9fa9;
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      border: solid 1px #006400;
      border-radius: 0.75rem;
      text-shadow: 0 0 0.2em #f5f5f5;
      background: #202020;
    }
    td {
      padding: 1rem 2rem;
      border: solid 1px #006400;
      background: #202020;
      color: #9f9fa9;
      border-radius: 0.5rem;

      &:first-child {
        color: #9f9fa9;
        font-weight: bold;
      }

      &.deposit {
        color: #00a000;
        text-shadow: 0 0 0.8em #50c878;
      }

      &.withdraw {
        color: #ff0000;
        text-shadow: 0 0 0.8em #ff4040;
      }
    }
  }
`
