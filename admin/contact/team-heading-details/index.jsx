import Style from "./team.module.css";
import {
  Container,
  Button,
  Col,
  Table,
  Card,
  Form
} from "react-bootstrap";
import {useState} from "react";
import Team from "./team";

const TeamHeading = () =>{
const delMessage = (index)=>{
          return(
            alert(index)
          );

}
const Td = (data)=>{
                  return(
                    <>
                    <tr>
                    <td className="text-s">{data.useData.index+1}.</td>
                    <td>{data.useData.username}</td>
                    <td>{data.useData.message} </td>
                    <td>{data.useData.date}</td>
                    <td className="text-center"><Button variant="danger"><i className="fa fa-trash"onClick={()=>delMessage(data.useData.index)}> </i></Button></td>
                    </tr>
                    </>
                  );
                  }
     return (
        <>
        <Container fluid>
        <Card className="shadow-sm my-3 p-3">
           <div className="table-responsive">
              <Table hover>
                <thead>
                  <tr>
                     <th>S/No</th>
                     <th>Username</th>
                     <th>Message</th>
                     <th>Date</th>
                      <th className="text-center">Action </th>
                   </tr>
                 </thead>
                  <tbody>
                   {
                     Team.map((item , index)=>{
                          item['index']=index;

                       return<Td useData={item} key={index} />
                     })
                   }
                  </tbody>
              </Table>
              </div>
              </Card>
         </Container>
        </>
   );
}
export default TeamHeading;
