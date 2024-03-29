import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler (req, res) {
    const session = await getServerSession(req, res, authOptions);
    if(!session) {
        res.status(401).json({ error: 'Unauthenticated User' });
    }
    else {
        res.status(200).json({ message: 'Successful' });
    }
}

