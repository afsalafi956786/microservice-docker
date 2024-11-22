
const BOOk = require('../model/book')



exports.addBook =async(req,res)=>{
    try{
        const book = new BOOk ({ name: req.body.name});
        const savedBook = await book.save();
        return res.status(200).json({ savedBook })

    }catch(error){
        console.log(error.message)
    }
}
 
exports.getBookById = async (req, res) => {
    const { bookId } = req.params;
    try {
        const book = await BOOk.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
