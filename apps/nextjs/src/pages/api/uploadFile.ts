import nextConnect from "next-connect";
import multer from "multer";

const upload = multer({
    storage: multer.diskStorage({
        destination: "./public/img", // destination folder
        filename: (req, file, cb) => cb(null, getFileName(file)),
    }),
});

const getFileName = (file: Express.Multer.File) => {
    return file.originalname;
};

const apiRoute = nextConnect({
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.use(upload.single("file")); // attribute name you are sending the file by

apiRoute.post((req, res) => {
    res.status(200).json({ data: `image saved` }); // response
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};
