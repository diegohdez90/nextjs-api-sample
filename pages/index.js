import { useEffect, useRef, useState } from "react"
import { fetchContacts } from "../utils/api";

export default function Home() {
  const nameRef = useRef();
  const emailRef = useRef();

  const [contacts, setContacts] = useState([]);


  useEffect(() => {
    return async () => {
      const res = await fetchContacts()
      const {data} = res;
      setContacts(data);
    }
  }, [])
  

  const onSubmitData = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;

    fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({
        email,
        name
      }),
      headers: {
        'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(async () => {
      const res = await fetchContacts();
      const { data } = res;
      setContacts(data);
    });
  }

  return (
    <div>
      <form onSubmit={onSubmitData}>
        <label>
          Email address
          <input type='text' name='email' placeholder="Email" ref={emailRef} />
        </label>
        <label>
          <input type='text' name='name' placeholder="Name" ref={nameRef} />
        </label>
        <input type='submit' value='Send' />
      </form>
      <div>
        You have {contacts.length} Contacts saved
        <ul>
          {
            contacts.map(contact => (
              <li key={contact.id}>{contact.name}: {contact.email}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
