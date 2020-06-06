//UTILIZANDO MULTER PARA UPLOAD DE IMAGENS!
import multer from 'multer';
import path from 'path';
//Crypto para gerar um hash aleatório de dados
import crypto from 'crypto';

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString('hex');

            const fileName = `${hash}-${file.originalname}`;

            callback(null, fileName);
        }
    }),
};