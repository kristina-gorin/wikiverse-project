import React,{useState} from 'react';
import apiURL from '../api';

export const Article = (props)=>{
  
  const date = props.article.createdAt.slice(0,10)
  return <div>
    <h4>{props.article.author.name}</h4>

    <h4 className='content'>
    {props.article.content}</h4>
    <h6>{props.article.tags.map((tag)=>"#"+tag.name)}</h6>
    <h4>{date}</h4>
    <button onClick = {()=>{props.setArticle(undefined)}}>GO BACK</button>
    
    
  </div>
}
export const NewArticleForm = ()=>{
  const[title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail]= useState('');

  const handleSubmit = async (event)=>{
    event.preventDefault();
    

    
    setTitle('');
    setContent('');
    setName('');
    setEmail('');
  }


  return(
    <form onSubmit={handleSubmit}>
      <input
      />
    </form>
  )
}

export const Page = (props) => {
  const [article, setArticle]= useState(undefined);
  const handleClick = async()=>{
    const res = await fetch(`${apiURL}/wiki/${props.page.slug}`)
    const data = await res.json();
    console.log(data)
    setArticle(data)
  }
  
  return <>
    <h3 className = 'headline' 
    onClick={handleClick}>{props.page.title}</h3>
    <div className='article'>
      
      {
        article ? <Article article = {article} setArticle = {setArticle}/> : ""
      }
    </div>
    
  </>
} 
	