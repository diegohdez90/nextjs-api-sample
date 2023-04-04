export default async function handler (req, res) {
    if(req.method === 'GET') {
        const id = req.query.id;
        const response = await fetch(`http://localhost:8084/contacts/${id}`);
        const data = await response.json();
    
        res.status(200).json({
            message: 'Detail retrieved',
            contact: data
        });
    
    }

}
