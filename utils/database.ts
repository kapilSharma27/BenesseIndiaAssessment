import mongoose from 'mongoose';

export const connectToDatabase = async (username: string, password: string) => {
  try {
    await mongoose.connect('mongodb+srv://kapilSharma:ruchi1727@benesseassessment.ugrrn3h.mongodb.net/?retryWrites=true&w=majority&appName=benesseAssessment', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log('MongoDB connected!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};