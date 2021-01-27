import styles from '../styles/Home.module.css';
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image'

const Index =({posts})=>{
  return(
    <div className={styles.main}>
    <div className={styles.mcontainer}>
    <div className={styles.Nav}><Link href="/" ><a href="/" >Home</a></Link></div>
    <div className={styles.main2}>
    <Image src="/160692.jpg" width={150} height={150} />
    <h1>BLOG</h1>
    {
      posts.map((post)=>(
        
        <li key={post.id}>
        <Link href={`/post?id=${post.id}`} >{post.title}</Link>
        </li>
        
      ))

    }</div>
    </div>
    
    </div>
  )
}
Index.getInitialProps =async()=>{
  const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
  const{data}=response;
  return{posts:data}
}
export default Index