// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://A8222668:Jp193804@clustertest.yo9zwwv.mongodb.net/testDB?retryWrites=true&w=majority', {
    dbName: 'testDB',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) :
    console.log('Connected to testDB database'));
 
// Schema for users of app
const UserSchema = new mongoose.Schema({
	walletAddress: {
		type: String,
		required: true,
        unique: true,
	},
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
	address: {
		type: String,
		required: true,
	},
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();
 
// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
//const router = express.Router();

// GET /api/users/:address
app.get('/:walletAddress', async (req, resp) => {
    //resp.send("App is Working");
	try {
		const user = await User.findOne({ walletAddress: req.params.walletAddress });
        //console.log(user);
        if(user===null){
            const massage="找不到";
            throw massage;
        }
		resp.json(user);
	  } catch (err) {
		console.error(err);
		resp.status(500).json({ message: 'Internal Server Error' });
	}
    // You can check backend is working or not by
    // entering http://loacalhost:5000
     
    // If you see App is working means
    // backend working properly
});
 
app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

app.put('/:walletAddress', async (req, res) => {
    try {
      const walletAddress = req.params.walletAddress;
      const newData = req.body;
  
      // 找到符合條件的第一筆資料並更新其內容
      const result = await User.findOneAndUpdate({ walletAddress }, newData, { new: true });
  
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.listen(5000);