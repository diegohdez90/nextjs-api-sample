import { Fragment } from "react"
import { fetchContacts } from "../../utils/api"

const Contacts = (props) => {

    return (<Fragment>
        <h1>Contacts</h1>
        <div>
            <ul>
                {props.contacts.map(contact => <li key={contact.id}>{contact.name}: {contact.email}</li>)}
            </ul>
        </div>
    </Fragment>)
}

export async function getStaticProps() {
    const res = await fetchContacts('http://localhost:3000');
    return {
        props: {
            contacts: res.data
        }
    }
}

export default Contacts;
