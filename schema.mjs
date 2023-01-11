import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query{
        checkApiStatus: ApiStatus
    }

    type ApiStatus{
        status:String
    }

    type Mutation{
        testMutations(input:String):Test
    }

    type Test{
        status:String
    }






`