
 async function fetchOffers(req,res,next) {
    let obj = [];
    let country;
    let ip;
    await fetch('https://api.ipregistry.co/?key=nclrzxvp857fsdj8')
        .then(function (response) {
            return response.json();
        })
        .then(function (payload) {
            country = payload.location.country.name;
            ip = {
                internet_protocol_address:payload.ip,
            }
        });
    switch(country) {
        case 'Poland': country = 'PL';
        break;
        case 'Germany': country = 'DE';
        break;
        case 'United States': country = 'US';
        break;
        case 'Spain' : country = 'ES';
        break;
        case 'Mexico' : country = 'MX';
        break;
        case 'Portugal' : country = 'PT';
        break;
        case 'Canada' : country = "CA";
        break;
        case 'Australia' : country = "AU";
        break;
        case 'Schwitzerland' : country = "CH";
        break;
        case 'France' : country = "FR";
        break;
        default: country = 'US';
        break;
    }
    await fetch(`https://www.cpagrip.com/common/offer_feed_json.php?user_id=12028&key=d5b38ceeb59f96ad2cb1872c06d2a875&country=FR&offer_type=Email/Zip Submit`).then((response) => response.json()).then(async (data) => {
        for (let x = 0; x < data.offers.length; x++) {
            obj.push(data.offers[x]);
        }
        if (data.offers.length < 5) {
            await fetch(`https://cpalead.com/dashboard/reports/campaign_json.php?id=2386112&offer_type=email_submit&ua=user&country=FR`).then((response) => response.json()).then((data) => {
                for (let i = 0;i<data.offers.length;i++) {
                    let object = {
                        offerlink:data.offers[i].link,
                        payout:data.offers[i].amount,
                        title:data.offers[i].description,
                    }
                    obj.push(object);
                   
                }
            });

        }
    })
    console.log(obj);
    obj.push(ip);
    res.send(obj);
}

module.exports = {
    fetch_offers:fetchOffers,
}