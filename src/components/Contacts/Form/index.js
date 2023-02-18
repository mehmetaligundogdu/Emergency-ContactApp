import {useState} from 'react'

const initialContact=({fullname:'',phone_number:''});
function Form({addContacts, contacts}) {
    const [form,setForm] = useState(initialContact);

    const onChange=(e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const onSubmit=(e) => {
        e.preventDefault();
        if(form.fullname === '' || form.phone_number === '') {
            alert('Lütfen tüm alanları doldurunuz.');
            return false;
        }
        addContacts([...contacts, form]);
        setForm(initialContact);
    }
  return (
    <form onSubmit={onSubmit}>
        <div className='input'>
            <input value={form.fullname} name='fullname' placeholder="Name" onChange={onChange}/>
        </div>
        <div className='input' >
            <input value={form.phone_number} name='phone_number' placeholder="Phone" onChange={onChange} />
        </div>
        <div className='button' >
            <button className='btn'>Add Contact</button> 
        </div>
        
    </form>
  )
}

export default Form;