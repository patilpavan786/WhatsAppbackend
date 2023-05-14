import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  aud: {
    type: String,
    required: true,
  },
  azp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  email_verified: {
    type: Boolean,
    required: true,
  },
  exp: {
    type: Number,
    required: true,
  },

  given_name: {
    type: String,
    required: true,
  },
  iat: {
    type: Number,
    required: true,
  },
  iss: {
    type: String,
    required: true,
  },
  jti: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  nbf: {
    type: Number,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model('User', userSchema);

export const addUser = async (request, response) => {
    try {
      // Validate request body
      const requiredFields = [
        'aud',
        'azp',
        'email',
        'email_verified',
        'exp',
        'given_name',
        'iat',
        'iss',
        'jti',
        'name',
        'nbf',
        'picture',
        'sub',
      ];
  
      for (const field of requiredFields) {
        if (!request.body[field]) {
          response.status(400).json(`${field} is required`);
          return;
        }
      }
  
    //   if (!request.body.family_name) {
    //     response.status(400).json('family_name is required');
    //     return;
    //   }
  
      const existingUser = await User.findOne({ sub: request.body.sub });
  
      if (existingUser) {
        response.status(201).json('User already exists');
        return;
      }
  
      const newUser = new User(request.body);
      await newUser.save();
      response.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      response.status(500).json('Internal Server Error');
    }
  };
  
  export const getUser = async (request, response) => {
    try {
        const user = await User.find({});
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json(error);
    }
}