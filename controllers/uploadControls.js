const  UserUploadData=require("../models/uploadData");
const getimageData = async (req, res) => {
    try {
         const UserUploadDataRes = await UserUploadData.find({
            userId:req.user.id,
            name: {
                $regex: req.body.search,
                $options: "i",
              },
         });
        res.status(200).json(UserUploadDataRes);
        if(!UserUploadDataRes) return res.status(400).json([{ message: 'req failed', type: 'error' }]);

    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
}

const createupload = async (req, res) => {
    try {
        req.body.userId=req.user.id;
        const UserUploadDataObj = new UserUploadData(req.body);
        await UserUploadDataObj.save();
        if(!UserUploadDataObj) return res.status(400).json([{ message: 'upload not created', type: 'error' }]);
        res.status(200).json(UserUploadDataObj);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
        res.status(500).send('Server Error');
    }
}




module.exports = {
    getimageData
,createupload
} 