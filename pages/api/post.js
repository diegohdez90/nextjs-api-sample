
export default async function handler (req, res) {
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
            res.status(200).json({ message: 'Contact added' })
        }
    }
}
