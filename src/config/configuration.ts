export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    uri: process.env.MONGODB_URI ,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'super-secret-key',
    expiresIn: process.env.JWT_EXPIRATION || '7d',
  },
  upload: {
    maxFileSize: 5242880, 
    path: './uploads',
  },
});