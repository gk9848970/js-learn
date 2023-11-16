export default function handler(req, res) {
    res.setPreviewData({ name: 'Gaurav' });
    res.redirect(req.query.redirect);
}