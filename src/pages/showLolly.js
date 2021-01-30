import React from 'react'
import Lolly from '../components/lolly'
import { useQuery, gql } from '@apollo/client'
import { useQueryParam } from 'gatsby-query-params'
import Header, { } from '../components/header/header'
import { Container, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {navigate} from 'gatsby'
import Loader from '../components/loader'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const GET_ALL = gql`
    query getData($lollyPath: String!){
        getLolly(lollyPath: $lollyPath){
            flavourTop,
             flavourMiddle,
             flavourBottom,
             recipientName,
             message,
             senderName,
             lollyPath,
        }
    }

`;


function showLolly({ location }) {
    const classes = useStyles();

    
    const id = useQueryParam('id', '123')
    

    const { loading, error, data } = useQuery(GET_ALL, {
        variables: { lollyPath: id }
    })

    if (error) {
        return <h1>Error</h1>
    }

    if (loading) {
        return(
          <div className='loader' >
            <Loader/>
          </div>
        )
      }

    

    return (
        <div>
            <Header />

            <div>
                <Container maxWidth='md' >
                    
                   <div className='showlolly_main_div' >
                       <div>
                       <Lolly fillLollyTop={data.getLolly.flavourTop} fillLollyBottom={data.getLolly.flavourBottom} fillLollyMiddle={data.getLolly.flavourMiddle} />
                       </div>
                       <div className='path_msg_div' >
                           <p style={{color:'white', textAlign:'center', fontSize:'18px'}} >Your lolly is freezing. Share it with this link:</p>
                       <div className='path_msg_link' >
                            <pre>{location.origin}/showLolly/{data.getLolly.lollyPath}</pre>
                       </div>
                       <div className='message_div' >
                          <p className='show_recipient_name' >{data.getLolly.recipientName}</p>
                          <p className='show_get_message' >{data.getLolly.message}</p>
                          <p className='show_sender_name' >{`___ ${data.getLolly.senderName}`}</p>
                       </div>
                       </div>
                     

                   </div>
                   <div className='show_lolly_para' >
                     <p>{data.getLolly.senderName}</p>
                       <span><p>made this virtual lollipop for you. You can <span style={{textDecoration:'underline', color:'purple',fontSize:'17px', cursor:'pointer'}} onClick={()=> {navigate('/createNew/')}} >make your own</span> to send to a friend who deserve some sugary treat which won't rot their teeth...</p></span>
                   </div>
                   

                </Container>
            </div>

        </div>
    )
}

export default showLolly