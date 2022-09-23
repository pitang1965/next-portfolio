export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

export type Language = {
  __typename?: 'Language';
  color: Scalars['String'];
  name: Scalars['String'];
  percentage: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  repositories: Array<Repository>;
};

export type Repository = {
  __typename?: 'Repository';
  description?: Maybe<Scalars['String']>;
  forkCount: Scalars['Int'];
  id: Scalars['String'];
  languages?: Maybe<Array<Language>>;
  name: Scalars['String'];
  stargazerCount: Scalars['Int'];
  url: Scalars['String'];
};
