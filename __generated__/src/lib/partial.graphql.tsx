/* 66b11e9f95110cc994e23a631f4b90bea760db6f
 * This file is automatically generated by graphql-let. */

import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Auth = {
  __typename?: 'Auth';
  isAuthenticated: Scalars['Boolean'];
  user: User;
  userFullName: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  gender: Scalars['String'];
  name: UserName;
};

export type UserName = {
  __typename?: 'UserName';
  title: Scalars['String'];
  first: Scalars['String'];
  last: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  viewer: OldUser;
  auth: Auth;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateName: OldUser;
  signIn: Auth;
};


export type MutationUpdateNameArgs = {
  name: Scalars['String'];
};


export type MutationSignInArgs = {
  name?: Maybe<Scalars['String']>;
};

export type OldUser = {
  __typename?: 'OldUser';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Scalars['String'];
};

export type PartialFragment = (
  { __typename?: 'OldUser' }
  & Pick<OldUser, 'id' | 'name'>
);

export const PartialFragmentDoc = gql`
    fragment Partial on OldUser {
  id
  name
}
    `;