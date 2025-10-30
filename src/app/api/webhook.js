import fs from 'fs'
import path from 'path'


export default function handler(req, res) {

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { id, rowData } = req.body;

        if (!id || !rowData) {

            return res.status(400).json({ message: 'Bad Request: Missing id or rowData' });
        }

        // Path to local Json file
        const filePath = path.join(process.cwd(), 'data', 'content.json');

        // Read existing data 
        let content = [];

        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, 'utf8');
            content = fileData ? JSON.parse(fileData) : [];
        }

        // Find if this ID already exists
        const existingIndex = content.findIndex((item) => item.id === id);

        if (existingIndex !== -1) {
            // Update existing entry
            content[existingIndex] = { id, ...rowData };
        } else {
            // Add new entry
            content.push({ id, ...rowData });
        }

        // Write back to JSON file
        fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');

        return res.status(200).json({ message: 'Row synced Successfully' });

    } catch (error) {

        console.error('Webhook Error:', error)
        return res.status(500).json({ message: 'Internal Server Error' });

    }
}