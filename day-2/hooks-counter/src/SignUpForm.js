import { useState } from "react";
export default function SignUpForm() {
    const[form,setForm] = useState({firstName:"",lastName:"",email:"",date:"",male:false,female:false,country:"",pine:false,liquorice:false});
    const change=(e)=>{
        if(e.target.checked){
             e.target.value=true;
        }
       setForm({...form,[e.target.name]:e.target.value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
         console.log(form);
        // log values from controlled inputs
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input placeholder='First Name' name="firstName" value={form.firstName} onChange={change}/>

                <input placeholder='Last Name' name="lastName" value={form.lastName} onChange={change}/>

                <input placeholder='Email' type="email" name="email" value={form.email} onChange={change}/>

                <input placeholder='Date of Birth' type="date" name="date" value={form.lastName} onChange={change}/>

                <br />

                <label>
                    <input type='radio' name="male" value={form.male} onChange={change}></input>
                    Male
                </label>

                <label>
                    <input type='radio' name="female" value={form.female} onChange={change}></input>
                    Female
                </label>

                <br />

                <select name='country' value={form.country} onChange={change}>
                    <option value=''>Select Country</option>
                    <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                    <option value='MO'>Mexico</option>
                </select>

                <br />

                <label>
                    <input type='checkbox' name="pine" value={form.pine} onChange={change}/>
                    Likes Pineapple
                </label>

                <label>
                    <input type='checkbox' name="liquorice" value={form.liquorice} onChange={change}/>
                    Likes Liquorice
                </label>

                <br />
                
                <button>Submit</button>
            </form>
          {Object.entries(form).map(([key, value]) => (
    <div key={key}>{value}</div>))}

          
        </div>
    )
}

// class SignUpForm extends Component {

//     state = {

//     }

//     handleSubmit = (event) => {
//         event.preventDefault()

//         console.log(this.state)
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>

//                     <input placeholder='First Name' />

//                     <input placeholder='Last Name' />

//                     <input placeholder='Email' type="email" />

//                     <input placeholder='Date of Birth' type="date" />

//                     <br />

//                     <label>
//                         <input type='radio'></input>
//                         Male
//                     </label>

//                     <label>
//                         <input type='radio'></input>
//                         Female
//                     </label>

//                     <br />

//                     <select name='country'>
//                         <option value=''>Select Country</option>
//                         <option value='US'>United States</option>
//                         <option value='CA'>Canada</option>
//                         <option value='MO'>Mexico</option>
//                     </select>

//                     <br />

//                     <label>
//                         <input type='checkbox' />
//                         Likes Pineapple
//                     </label>

//                     <label>
//                         <input type='checkbox' />
//                         Likes Liquorice
//                     </label>

//                     <br />
                    
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

