import { useContext } from "react";
import MyContext from "../../context/MyContext";
import { fireDB } from "../../firebase/FirebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";

const UserDetail = () => {
 const context = useContext(MyContext);
 const { getAllUser, getAllUserFunction } = context;

 // Delete User
 const deleteUser = async (id) => {
  try {
   await deleteDoc(doc(fireDB, "user", id));
   toast.success("User Deleted successfully");
   if (navigator.vibrate) {
    navigator.vibrate([200]);
   }
   const audio = new Audio("src/assets/added.mp3");
   audio.play();
   getAllUserFunction();
  } catch (error) {
   console.log(error);
  }
 };
 return (
  <div>
   <div>
    <div className="py-5 flex justify-between items-center">
     {/* text  */}
     <h1 className=" text-xl text-amber-500 font-bold">All User</h1>
    </div>

    {/* table  */}
    <div className="w-full overflow-x-auto">
     <table className="w-full  border border-collapse sm:border-separate border-amber-100 text-amber-400 text-center">
      <tbody>
       <tr>
        <th scope="col" className="dashli">
         S.No.
        </th>
        <th scope="col" className="dashli">
         Name
        </th>
        <th scope="col" className="dashli">
         Email
        </th>
        <th scope="col" className="dashli">
         Id
        </th>
        <th scope="col" className="dashli">
         Role
        </th>
        <th scope="col" className="dashli">
         Date Joined
        </th>
        <th scope="col" className="dashli">
         Action
        </th>
       </tr>
       {getAllUser.map((value, index) => {
        return (
         <tr key={index} className="text-amber-300">
          <td className="dashtd">{index + 1}</td>
          <td className="dashtd">{value.name}</td>
          <td className="dashtd">{value.email}</td>
          <td className="dashtd">{value.uid}</td>
          <td className="dashtd">{value.role}</td>
          <td className="dashtd">{value.date}</td>
          <td className="dashtd cursor-pointer" onClick={() => deleteUser(value.id)}>
           Delete User
          </td>
         </tr>
        );
       })}
      </tbody>
     </table>
    </div>
   </div>
  </div>
 );
};

export default UserDetail;
