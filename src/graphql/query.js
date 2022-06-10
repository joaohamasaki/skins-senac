import { gql } from '@apollo/client';

export const getAllSkins = gql`

query getAllSkins {
    skins {
      skin_id
      skin_image
      skin_name
    }
  }
  `;