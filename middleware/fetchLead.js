
const convert = require('xml-js');

async function fetchLead(req, res, next) {
    let ip;
    await fetch('http:localhost:5000/offers').then(response => response.json()).then((data) => ip = data[data.length - 1].internet_protocol_address);
    fetch(`https://www.cpagrip.com/common/lead_check_rss.php?user_id=12028&key=d5b38ceeb59f96ad2cb1872c06d2a875&time=alltime&check=ip&value=${ip}`).then((response) => response.text())
        .then(str => { dataAsJson = JSON.parse(convert.xml2json(str)) }).then(() => { res.send(dataAsJson.elements[0].elements[0].elements[3].elements[0].text) });
}

module.exports = {
    fetch_lead: fetchLead,
}