/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addBookmark = /* GraphQL */ `
  mutation AddBookmark($bookmarkInput: bookmarkInput!) {
    addBookmark(bookmarkInput: $bookmarkInput) {
      id
      title
      url
      description
    }
  }
`;
export const delBookmark = /* GraphQL */ `
  mutation DelBookmark($thatId: ID!) {
    delBookmark(thatId: $thatId)
  }
`;
