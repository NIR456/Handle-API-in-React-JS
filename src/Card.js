import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa";


const MyCard = ({ details}) => {

return(
    <Card className="text-center Para">
      <CardBody  className="text-center Para">
              <img height="150" width="150" 
                   className="rounded-circle img-medium border-yellow"
                     src= {details.picture?.medium}
                      
              />
              {details.gender}
      <CardTitle>
                   <h1>
             <span className="mr-2">{details.name?.title}</span>
             <span>{details.name?.first}</span>
             <span>{details.name?.last}</span>
                   </h1>
       </CardTitle>
       <CardText   className="Para1">
                            <FaMapMarkedAlt />
                                         {details.location?.city}
                                               <h1>
                                             {details.phone}
                  
                                                </h1>
                               <FaPhone />
                                                    <h3>
                                                {details.cell}
                                                    </h3>

                           <FaEnvelope />
                                                <h2>
                                               {details.email}
                                                 </h2>

              </CardText>
                                
                </CardBody>
                                 
    </Card>
             

           );
       };

       export default MyCard;





