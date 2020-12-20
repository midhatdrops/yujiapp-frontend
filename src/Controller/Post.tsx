import React, { FunctionComponent } from 'react';
import Axios from 'axios';

interface PostProps {
   nome: string;
   peso: string;
   altura: string;
}

const Post: FunctionComponent<PostProps> = (props: PostProps) => {
   const Send = async () => {
      await Axios.post('http://localhost:4200/users', {
         nome: props.nome,
         peso: props.peso,
         altura: props.altura,
      }).then((res) => {
         console.log(res.status, res.data);
      });
   };
   return (
      <>
         <button onClick={() => Send()}>Enviar</button>
      </>
   );
};

export default Post;
