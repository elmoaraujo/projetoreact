
import "./postagem.css";


export default function Postagem({post}) {

    return (
            
            <div className="post">

                <img
                className="postImg"
                src={post.foto}
                alt=""
                />

                <div className="postInfo">
                    <div className="postCat">
                        <span>{post.info}</span>
                </div>  


                <div className="postTitulo">
                    <span>{post.titulo}</span>


                </div> 
                <div className="postData">
                    <span>18 Dez 2022</span>
                </div>


            </div> 

            <p className="postDesc">
               <span>{post.descrição}</span>

            </p>

            </div> 


    )
}
