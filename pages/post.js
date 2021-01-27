import axios from 'axios';
import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/Home.module.css';


const Post =({id,photos})=>(
    <div className={styles.main}>
    <div className={styles.mcontainer}>
    <div className={styles.Nav}><Link href="/" ><a href="/" >Home</a></Link></div>
    <div className={styles.main2}>
    <Image src="/86369.jpg" width={150} height={150} />
    <h1>Post: {id}</h1>
    {
        photos.map(photo=>(
            <p>{photo.title}</p>
        ))
    }
    </div>
    </div>
    </div>
    
    
    
)
Post.getInitialProps =async({query})=>{
    const respose =await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${query.id}`)
    const{data}=respose;
    return{...query,photos:data};

}
export default Post