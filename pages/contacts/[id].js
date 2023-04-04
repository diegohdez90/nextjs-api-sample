import { Fragment } from "react";
import { fetchContacts, fetchContactById } from "../../utils/api";

const Detail = (props) => {
    console.log(props)
    return (<Fragment>
        <h1>Contact Detail</h1>
        <p>{props.contact.name} has email {props.contact.email}</p>
    </Fragment>)
}

export async function getStaticProps(context) {
    const { id } = context.params;
    const data = await fetchContactById('http://localhost:3000', id);
    return {
        props: {
            contact: data.contact
        }
    }
}

export async function getStaticPaths(context) {
    const res = await fetchContacts('http://localhost:3000');
    return {
        paths: res.data.map(item => 
            ({
                params: {
                    id: String(item.id)
                }
            })
        ),
        fallback: true
    }
}


export default Detail;
