// Cesta completa: price_1N084CI2nUh1k9THx38lthF0
// Cesta Orgânica: price_1N085FI2nUh1k9THjgzojcXE
// secret: sk_test_51MzoB4I2nUh1k9THl1T0ppTtbLSv0zeAiaAvNd46jKr9t40mHA7mhFEfYjqS6rggklvFqNXoGZm4C2xiQAiWQmeq000BpdDo9N
// public: pk_test_51MzoB4I2nUh1k9THtxrHY1yJ75rcW7oRHiW0dkpACVW1vWaBlkoYnUfI5zk75iNOMPp6CdZpuSF7XP902ELxyqoG001FKZtceW

const express = require('express');
var cors = require('cors');
const stripe = require('stripe'); ('sk_test_51MzoB4I2nUh1k9THl1T0ppTtbLSv0zeAiaAvNd46jKr9t40mHA7mhFEfYjqS6rggklvFqNXoGZm4C2xiQAiWQmeq000BpdDo9N');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {



    console.log(req.body);
    let items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.price,
                quantity: item.quantity,
            }

        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    })

    res.send(JSON.stringify({
       url: session.url 
    }))

})

app.listen(4000,() => console.log('listening on port 4000'));