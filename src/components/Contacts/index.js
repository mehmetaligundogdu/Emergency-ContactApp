import {useState,useEffect} from 'react'
import List from './List';
import Form from './Form';

const acil=[{
    fullname:'Acil Çağrı Merkezi',
    phone_number:'112'
    },
    {
    fullname:'AFAD Çağrı Merkezi',
    phone_number:'122'
    },
    {
    fullname:'Polis Çağrı Merkezi',
    phone_number:'155'
    },
    {
    fullname:'Jandarma Çağrı Merkezi',
    phone_number:'156'
    },
    {
    fullname:'İtfaiye Çağrı Merkezi',
    phone_number:'110'
    },
    {
    fullname:'Terör İhbar Hattı',
    phone_number:'140',
    }, ]
function Contacts() {
    const [contacts,setContacts] = useState(acil);

    useEffect(() => {
        console.log(contacts);
    },[contacts])
  return (
    <div className='container'>
        <List contacts={contacts} />
        <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;