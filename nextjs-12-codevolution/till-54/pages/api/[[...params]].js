export default function handler(req, res) {
    const query = req.query;
    console.log(query);
    res.status(200).json({ name: "Catch all API Route" })
}