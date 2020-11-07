const Discord = require('discord.js');
const { type } = require('os');

const client = new Discord.Client();
const fetch = require('node-fetch');

const queryString = require('querystring');

const {prefix, token} = require('./data/config.json');
/* const {products} = require('./products.json'); */
const trim = (str, max) => (str.length > max ? `${str.slice(0, max -10)}...` : str);

/* let productName = JSON.stringify(products[0].title);
let product = JSON.stringify()
console.log(productName); */

/*Basically a bot that can use the dictionary on the web*/
client.on('ready', () => {
    //log discord bot client tag
    console.log(`Connected as ${client.user.tag}`);
    client.user.setStatus("online");
    client.user.setActivity("User Search", {type:"WATCHING"});
    let botTestingChannel = client.channels.cache.get("774332501421719604");
    botTestingChannel.send("Hello Imposters!");
    botTestingChannel.send(`**To search for AMAZON products...**`);
    botTestingChannel.send(`**Type !product "keyword" to get your result**`);
    botTestingChannel.send(`**For now I can only support up to 5 searches!**`);
});

client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'product'){
        if(!args.length){
            return message.channel.send('Cant search with this!');
        }

        const query = queryString.stringify({term: args.join(' ')});

        var list = await fetch(`http://127.0.0.1:8080/search/${query}`).then(response => response.json());
        let productTitle = JSON.stringify(list.products);
        //console.log(productTitle[0].price);
        for(let i = 0; i < 6; i++){
            //console.log(list.products[i]);
            let productName = list.products[i].title;
            let productPrice = list.products[i].price;
            let productRating = list.products[i].rating;
            let productReviews = list.products[i].reviews;
            let productLink = list.products[i].url;
            console.log(list.products[i].title);
            console.log(list.products[i].price);
            console.log(list.products[i].rating);
            console.log(list.products[i].reviews);
        const embed = new Discord.MessageEmbed()
        .setColor('#febd69')
        .setTitle(productName)
        //.setURL(productLink)
        .addFields(
            {name: 'Product Name', value: trim(productName, 1024) },
            {name: 'Price', value: trim(productPrice, 1024) },
            {name: 'Rating', value: trim(productRating, 1024) },
            {name: 'Reviews', value: `${productReviews}.`},
        );
        message.channel.send(embed);
        }
        //console.log(list.products[0].title);
/*         if(!list.length){
            return message.channel.send(`No results found for **${args.join(' ') }**.`);
        } */



/*         const embed = new Discord.MessageEmbed()
        .setColor('#EFFF00')
        .setTitle(answer.products)
        .setURL(answer.url)
        .addFields(
            {name: 'Product Name', value: trim(answer.title, 1024) },
            {name: 'Price', value: trim(answer.price, 1024) },
            {name: 'Reviews', value: `${answer.reviews} Reviews.`},
        );
        message.channel.send(embed); */

    }
});
//dont upload bot token it will get disabled automatically by discord bot

client.login(token);

