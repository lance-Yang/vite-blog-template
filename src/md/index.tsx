import { Card } from '../components/Card'
import {useSelector} from 'react-redux'

import {useGetMdDocumentQuery} from '../store/mdApi'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css'

const Document = () => {

  const mdObj = useSelector((state:any) => state.mdReducer.mdDocument);
  const [content,setContent] = useState<string>('');

  useEffect(() => {
    axios.get(mdObj.url).then(res => {
      if(res?.status == 200){
        setContent(res?.data)
      }
    })
  },[mdObj?.url])

  console.log(content,'res..')


  return (
    <Card>
      <ReactMarkdown children={content}  />
  </Card>
  )
}

export default Document;
