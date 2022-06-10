import { gql } from "@apollo/client";

export const addSkins = gql`
    mutation addTodos($name: String!, $image: Boolean!) {
        insert_todos(objects: {skin_name: $text, skin_image: $image}) {
            affected_rows
        }
    }`;

export const deleteSkins = gql`
    mutation deleteTodo($id:uuid!) {
        delete_todos(where: {skin_id: {_eq: $id}}) {
            returning {
                skin_id
                skin_name
                skin_image
            }
        }
  }`;

 export const updateSkins = gql`
  mutation updateTodo($skin_id: uuid!, $skin_name: String, $skin_image: Boolean) {
      update_todos(where: {
          skin_id: {_eq: $skin_id}}, 
          _set: {skin_name: $skin_name, skin_image: $skin_image}) {
          returning {
              skin_id
              skin_name
              skin_image
          }
      }
  }`;
