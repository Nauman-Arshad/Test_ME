import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import shortid from "shortid"
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
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [oldTitle, setOldTitle] = useState(title)
  const [oldUrl, setOldUrl] = useState(url)
  const { data, loading } = useQuery(GET_BOOKMARKS)
  const [addBookmark] = useMutation(ADD_BOOKMARK, {refetchQueries: [GET_BOOKMARKS]});
  const [deleteBookmark] = useMutation(DELETE_BOOKMARK, {refetchQueries: [GET_BOOKMARKS]});
  const [ updateBookmark, { loading: mutationLoading, error: mutationError } ] = useMutation(UPDATE_BOOKMARK, {refetchQueries: [GET_BOOKMARKS]});

  const handleAddBookmark = async () => {
    const addbookmark = {
      id: shortid.generate(),
      title,
      url,
    }
    console.log("Creating Bookmark:", addbookmark)
    await addBookmark({
      variables: {
        addbookmark,
      },
    })
  }

  const handleUpdateBookmark = (id) => {
    console.log(id);
    const newbookmark = {
      id,
      title: oldTitle,
      url: oldUrl,
    }
    console.log("Update Bookmark:", newbookmark)
    updateBookmark({
      variables: {
        bookmark: newbookmark,
      },
    })
  }


  return (
    <div>
      <h2>Bookmark Form</h2>
        Enter Title
        <input value={title} onChange={({ target }) => setTitle(target.value)} />
        Enter URL
        <input value={url} onChange={({ target }) => setUrl(target.value)} />
        <button  onClick={() => handleAddBookmark()} >Add Bookmark</button>
      <div>
      <h2>My Bookmark List</h2>
      {loading && <h3>Loading ...</h3>}
      {!loading &&
        data &&
        data.getBookmarks.map((bookmark) => (
          <div key={bookmark.id}>
            <li>{bookmark.title}</li><a href={bookmark.url} target="_blank">{bookmark.url}</a>
            <button onClick={() => deleteBookmark({variables: {bookmarkId: bookmark.id}})}>x</button>
            <input  type="text"  onChange={(e)=> setOldTitle(e.target.value)} />
            <input  type="text"  onChange={(e)=> setOldUrl(e.target.value)} />
            <button type="button" onClick={() => handleUpdateBookmark(bookmark.id)}>Update</button>
          </div>
        ))
      }
      </div>
    </div>
  )
}
