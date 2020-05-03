export const GRAPHQL_API = 'http://localhost:8080/graphql';

export const TITLE = "Video List";

export const GET_VIDEOS = `
  query videos {
    videos {    
      id
      title
      url
      author {
        id
        name
      }
    }
  }
 `;
