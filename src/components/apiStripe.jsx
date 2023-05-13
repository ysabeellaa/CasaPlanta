import Stripe from 'stripe';

// secret: sk_test_51MzoB4I2nUh1k9THl1T0ppTtbLSv0zeAiaAvNd46jKr9t40mHA7mhFEfYjqS6rggklvFqNXoGZm4C2xiQAiWQmeq000BpdDo9N
// public: pk_test_51MzoB4I2nUh1k9THtxrHY1yJ75rcW7oRHiW0dkpACVW1vWaBlkoYnUfI5zk75iNOMPp6CdZpuSF7XP902ELxyqoG001FKZtceW
const stripe = new Stripe(process.env.sk_test_51MzoB4I2nUh1k9THl1T0ppTtbLSv0zeAiaAvNd46jKr9t40mHA7mhFEfYjqS6rggklvFqNXoGZm4C2xiQAiWQmeq000BpdDo9N, {
  apiVersion: '2020-08-27',
});
console.log(stripe.apiVersion);