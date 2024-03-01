import axios from "axios";
import * as cheerio from "cheerio";
var player_id = "380175663";
axios.get(`https://www.dotabuff.com/players/${player_id}`).then((response)=>{
    const html = response.data;
    const $ = cheerio.load(html);
    const title = $(".rank-tier-wrapper").attr("title");
    console.log(title);
}).catch(console.error);
