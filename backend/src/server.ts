import { GraphQLServer } from "graphql-yoga";
import path from "path";
import resolvers from "./graphql/resolvers";

export const server: GraphQLServer = new GraphQLServer({
  typeDefs: path.join(__dirname, "graphql/schema.graphql"),
  resolvers,
});
