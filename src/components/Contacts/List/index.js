import {useState} from 'react';

function List({contacts}) {

    const [filter,setFilter] = useState('');
    const filtered = contacts.filter((item) => {
        return item.fullname.toLowerCase().includes(filter.toLowerCase());
      });

  return (
    <div>
        <h1>Emergency Number</h1>

        <input placeholder="Search..." 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)} 
        />
        <ul className='list'>
            {filtered.map((contact,index) => (
                <li key={index}>
                    <span>{contact.fullname}</span>
                    <span>{contact.phone_number}</span>
                </li>
            ))}
        </ul>
        <strong>
            ({filtered.length} {filtered.length > 1 ? 'contacts' : 'contact'})
        </strong>
    </div>
  )
}

export default List;