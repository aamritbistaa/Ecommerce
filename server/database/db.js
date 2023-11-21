import mongoose from "mongoose";
const Connection = (USERNAME, PASSWORD) => {
  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.p898tco.mongodb.net/`;
  try {
    mongoose.connect(URL).then(() => console.log("Connected!"));
  } catch (error) {
    console.log(error.message);
  }
};
export default Connection;
