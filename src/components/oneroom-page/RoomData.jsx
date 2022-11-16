// import React from "react";
// import { RoomContext } from "../context.js";

// class OneRoom extends React.Component {
//     state = { id: this.props.match.params.id };
//     static contextType = RoomContext;
//     render() {
//         const { getRoom } = this.context;
//         const room = getRoom(this.state.id);

//         const { name, capacity, price, pets, images } = room;
//         return (
//             <>
//                 <section>
//                     <div>
//                         <img src={images} alt="" />
//                     </div>
//                     <div>
//                         <div>
//                             <h2>{name}</h2>
//                             <h3>info</h3>
//                             <h4>price : ${price}</h4>
//                             <h4>
//                                 max capacity :
//                                 {capacity > 1
//                                     ? `${capacity} People`
//                                     : `${capacity} Person`}
//                             </h4>
//                             <h4>
//                                 {pets ? "Pets Allowed" : "Pets not Allowed"}
//                             </h4>
//                         </div>
//                     </div>
//                 </section>
//             </>
//         );
//     }
// }

// export default OneRoom;
