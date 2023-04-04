import { useRef } from "react"

export default function Home() {
  const nameRef = useRef();
  const emailRef = useRef();

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
    </div>
  )
}
