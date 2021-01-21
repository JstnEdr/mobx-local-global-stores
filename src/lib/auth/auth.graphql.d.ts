/* 45b00dce5769db3f16fe262f479d2a84f7b97b55
 * This file is automatically generated by graphql-let. */

import * as Apollo from '@apollo/client';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type Auth = {
    __typename?: 'Auth';
    isAuthenticated: Scalars['Boolean'];
    user: User;
    userFullName: Scalars['String'];
};
export declare type User = {
    __typename?: 'User';
    gender: Scalars['String'];
    name: UserName;
};
export declare type UserName = {
    __typename?: 'UserName';
    title: Scalars['String'];
    first: Scalars['String'];
    last: Scalars['String'];
};
export declare type Query = {
    __typename?: 'Query';
    viewer: OldUser;
    auth: Auth;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    updateName: OldUser;
    signIn: Auth;
};
export declare type MutationUpdateNameArgs = {
    name: Scalars['String'];
};
export declare type MutationSignInArgs = {
    name?: Maybe<Scalars['String']>;
};
export declare type OldUser = {
    __typename?: 'OldUser';
    id: Scalars['ID'];
    name: Scalars['String'];
    status: Scalars['String'];
};
export declare type AuthQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type AuthQuery = ({
    __typename?: 'Query';
} & {
    auth: ({
        __typename?: 'Auth';
    } & Pick<Auth, 'isAuthenticated' | 'userFullName'> & {
        user: ({
            __typename?: 'User';
        } & Pick<User, 'gender'> & {
            name: ({
                __typename?: 'UserName';
            } & Pick<UserName, 'first'>);
        });
    });
});
export declare type SignInMutationVariables = Exact<{
    name?: Maybe<Scalars['String']>;
}>;
export declare type SignInMutation = ({
    __typename?: 'Mutation';
} & {
    signIn: ({
        __typename?: 'Auth';
    } & Pick<Auth, 'isAuthenticated'>);
});
export declare const AuthDocument: Apollo.DocumentNode;
/**
 * __useAuthQuery__
 *
 * To run a query within a React component, call `useAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useAuthQuery(baseOptions?: Apollo.QueryHookOptions<AuthQuery, AuthQueryVariables>): Apollo.QueryResult<AuthQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthQuery, AuthQueryVariables>): Apollo.QueryTuple<AuthQuery, Exact<{
    [key: string]: never;
}>>;
export declare type AuthQueryHookResult = ReturnType<typeof useAuthQuery>;
export declare type AuthLazyQueryHookResult = ReturnType<typeof useAuthLazyQuery>;
export declare type AuthQueryResult = Apollo.QueryResult<AuthQuery, AuthQueryVariables>;
export declare const SignInDocument: Apollo.DocumentNode;
export declare type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;
/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export declare function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>): Apollo.MutationTuple<SignInMutation, Exact<{
    name?: string | null | undefined;
}>>;
export declare type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export declare type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export declare type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
