import { useEffect, useRef, useState } from "react"

export default function Home() {
  const nameRef = useRef();
  const emailRef = useRef();

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
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
    .then(data => {
      fetchContacts();
    });
  }

  const fetchContacts = () => {
    fetch('/api/post')
      .then(res => res.json())
      .then(content => {
        const { data } = content;
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
