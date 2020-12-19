import React, { FunctionComponent, useState } from 'react';
import Axios from 'axios';

interface List {
   nome: string;
   peso: string;
   altura: string;
   createdAt: string;
}

async function GetList<T>(name: string) {
   let data: T[] = [];
   try {
      await Axios.get<Array<T>>(`http://localhost:4200/users/${name}`).then<
         Array<T>
      >((res) => {
         return (data = res.data);
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
   const [records, setRecords] = useState<List[]>([]);
   const { nome } = props;
   const list = async () => {
      const teste = await GetList<List>(nome);
      return setRecords(teste);
   };
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
   list();
   return (
      <>
         {records.map((el) => {
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
