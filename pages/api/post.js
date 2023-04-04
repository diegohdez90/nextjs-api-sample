
export default async function handler (req, res) {
    console.log(req.method);
    if(req.method === 'POST') {
        const {
            email,
            name
        } = req.body;

        const data = {
            id: Date.now(),
            email,
            name
        }

        const response = await fetch('http://localhost:8084/contacts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.status > 200) {
            res.status(201).json({ message: 'Contact added' })
        }
    }

    if (req.method === 'GET') {
        const response = await fetch('http://localhost:8084/contacts', {
            method: 'GET'
        });
        const data = await response.json();
        res.status(200).json({
            data,
            message: 'Contacts retrieve successful'
        });
    }
}
