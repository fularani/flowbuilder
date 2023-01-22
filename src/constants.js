export const GRAPHQL_API = 'http://localhost:1337/graphql';

export const TITLE = "List";

export const GET_LIST = `
query List {
  institutes{
    data{
      id
      attributes{
        institute_name
        branches{
          data{
            id
            attributes{
              branch_name
              courses{
                data{
                  id
                  attributes{
                    course_name                    
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
 `;
