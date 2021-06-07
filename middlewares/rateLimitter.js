import rateLimit from 'express-rate-limit';

const rateLimiterUsingThirdParty = rateLimit({
//   windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  windowMs: 10 * 60 * 1000, // 10 minutes in milliseconds
// max: 100,
  max: 10,
  message: 'You have exceeded the 10 requests in 10 minutes limit!', 
  headers: true,
});

export default rateLimiterUsingThirdParty;