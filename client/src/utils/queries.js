import { gql } from '@apollo/client';

//Query 
export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                image
                link
                title
            }
        }
    }
`;
