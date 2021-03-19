

import { QueryResolvers } from "./resolvers"


// Works OK 
function authorQueryStatic() {
  return {
    firstName: "nico"
  }
}

// Doesn't work, although correctly called by graphql-js
function authorQueryResolver() {
  return () => ({
    firstName: function () {
      return "nico"
    }
  })
}

const fjSchema: QueryResolvers = {
  authorQuery: authorQueryResolver
}

