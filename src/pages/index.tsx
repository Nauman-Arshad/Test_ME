import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import './style.css';

const GET_BOOKMARKS = gql`
  query getBookmarks {
    getBookmarks {
        id
        title
        url
    }
  }
  `

const ADD_BOOKMARK = gql`
  mutation addBookmark ($bookmark: BookmarkInput!) {
    addBookmark (bookmark: $bookmark) {
        id
        title
        url
    }
  }
`

const DELETE_BOOKMARK = gql`
  mutation deleteBookmark ($bookmarkId: String!) {
    deleteBookmark (bookmarkId: $bookmarkId)
  }
`

const UPDATE_BOOKMARK = gql`
  mutation updateBookmark ($bookmark: BookmarkInput!) {
    updateBookmark (bookmark: $bookmark) {
        id
        title
        url
    }
  }
`

export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}
