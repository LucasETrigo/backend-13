import mongoose from 'mongoose';

export default class mongoConnect {
    constructor() {
        this.connection = this.createConnection();
    }

    createConnection() {
        const uri = 'mongodb://localhost:27017/coder';
        // const uri =
        //     'mongodb+srv://TrigoLucas:aVv1EU15efkvgtnX@cluster0.zkplia9.mongodb.net/test?retryWrites=true&w=majority';
        const options = { useNewUrlParser: true, useUnifiedTopology: true };

        mongoose.connect(uri, options).then((err) => {
            err;
        });
    }
}
