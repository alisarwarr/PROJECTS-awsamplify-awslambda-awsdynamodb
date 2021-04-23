/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo($todosInput: todosInput!) {
    createTodo(todosInput: $todosInput) {
      id
      detail
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo($thatId: ID!) {
    deleteTodo(thatId: $thatId)
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo($todosInput: todosInput!) {
    updateTodo(todosInput: $todosInput) {
      id
      detail
    }
  }
`;
