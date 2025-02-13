<<<<<<< HEAD
# FEB-7-Counter-
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


 //USING IF ELSEEE CONDITIONNNN
  const name="Ahalya"
//   if(name){
//   return(
//     <>
//     <h1>{name}</h1>
//     </>
//   )
// }else{
//     return(
//       <>
//       <h1>Network issue</h1>
//       </>
//     )
//   }

//USING TERNARY OPERATORRR
return(
  <>
  <h1>{name ? name : "Network issue"}</h1>
  </>
)


[text](src/Components/Table.jsx)
import { peopleData } from "../Data/peopleData.js"
const Table=()=>{
    return(
        <>
        <div>
            <table border={1} cellPadding={0}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>age</th>
                        <th>occupation</th>
                        <th>address</th>
                        <th>phone number</th>
                        <th>mailid</th>
                        <th>gender</th>
                    </tr>
                </thead>
                <tbody>
                    {peopleData.map((person,index)=>{
                        <>
                        {/* <tr key={index}>
                            <td>{person.id ? person.id : "N/A"}</td>
                            <td>{person.name ? person.name : "N/A"}</td>
                            <td>{person.age ? person.age : "N/A"}</td>
                            <td>{person.occupation ? person.occupation : "N/A"}</td>
                            <td>{person.address ? person.address : "N/A"}</td>
                            <td>{person.phonenumber ? person.phonenumber : "N/A"}</td>
                            <td>{person.mailid ? person.mailid : "N/A"}</td>
                        </tr> */}
                         <tr key={index}>
                            <td>{person.id ?? "N/A"}</td>
                            <td>{person.name ?? "N/A"}</td>
                            <td>{person.age ?? "N/A"}</td>
                            <td>{person.occupation ?? "N/A"}</td>
                            <td>{person.address ?? "N/A"}</td>
                            <td>{person.phonenumber ??  "N/A"}</td>
                            <td>{person.mailid ?? "N/A"}</td>
                        </tr>
                        </>
                    })}

                </tbody>
            </table>
        </div>
        </>
    )
}
export default Table
>>>>>>> 7680f20 (File are added to the repository)
