import multer from "multer";
import path from "path";

export default function(diretorio: string) {
    return {
        storage: multer.diskStorage({
            destination: path.join(__dirname, '..', '..', 'uploads', diretorio),
            filename: (request, file, cb) => {
                const filename = `${Date.now()}-${file.originalname}`;
                cb(null, filename);
            }
        })
    }
}
