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
      <h2>Bookmark Form</h2>
      <form>
        Enter Title
        <input type="text" />
        Enter URL
        <input type="text" />
        <button type="submit">Add Bookmark</button>
      </form>
      <div>
      <h2>My Bookmark List</h2>
        <li>My Bookmark 1</li><a href="https://google.com" target="_blank">https://google.com</a><button>""</button><button>x</button>
        <li>My Bookmark 2</li><a href="https://fb.com" target="_blank">https://fb.com</a><button>""</button><button>x</button>
        <li>My Bookmark 3</li><a href="https://twitter.com" target="_blank">https://twitter.com</a><button>""</button><button>x</button>
      </div>
    </div>
  )
}
