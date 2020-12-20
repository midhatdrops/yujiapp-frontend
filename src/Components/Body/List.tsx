import React, { FunctionComponent, useEffect, useState } from 'react';
import Axios from 'axios';
import Post from '../../Controller/Post';

interface List {
   nome: string;
   peso: string;
   altura: string;
   createdAt: string;
}

async function GetList<List>(name: string) {
   // const [records, setRecords] = useState<List[]>([]);
   let data: List[] = [];
   try {
      await Axios.get<Array<List>>(`http://localhost:4200/users/${name}`).then<
         Array<List>
      >((res) => {
         return (data = res.data);
         //  return setRecords(data)
      });
   } catch (err) {
      console.log(`err.message >>:`, err.message);
   }
   return data;
}

interface RenderProps {
   nome: string;
}

const RenderList: FunctionComponent<RenderProps> = (props: RenderProps) => {
   const { nome } = props;
   const [arr, setArr] = useState<List[]>([]);
   const DateTreatment = (timestamp: string) => {
      const date = new Date(parseInt(timestamp) * 1000);
      const day = date.getDay();
      const months = [
         'Jan',
         'Feb',
         'Mar',
         'Apr',
         'May',
         'Jun',
         'Jul',
         'Aug',
         'Sep',
         'Oct',
         'Nov',
         'Dec',
      ];
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = '0' + date.getMinutes();
      const seconds = '0' + date.getSeconds();
      const treatedTime = ` ${day}/${month}/${year} - ${hours} :  ${minutes.substr(
         -2
      )} : ${seconds.substr(-2)}`;
      return treatedTime;
   };
   const teste = async () =>
      await GetList<List>(nome).then((res) => {
         return setArr(res);
      });
   return (
      <>
         <button onClick={() => teste()}>Teste</button>
         <Post nome={nome} peso={'60'} altura={'1.5'} />
         {arr.map((el) => {
            return (
               <div key={el.createdAt}>
                  {`${el.nome} - ${el.peso} - ${el.altura} - ${DateTreatment(
                     el.createdAt
                  )}`}
               </div>
            );
         })}
      </>
   );
};

export default RenderList;
