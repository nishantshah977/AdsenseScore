const sample_space = 23;
var score = 0;


// TLDs

const countryTLDs = ['ac', 'ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'ao', 'aq', 'ar', 'as', 'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg', 'bh', 'bi', 'bj', 'bl', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt', 'bv', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cg', 'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cu', 'cv', 'cw', 'cx', 'cy', 'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'eg', 'er', 'es', 'et', 'eu', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'gb', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'id', 'ie', 'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo', 'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky', 'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv', 'ly', 'ma', 'mc', 'md', 'me', 'mf', 'mg', 'mh', 'mk', 'mm', 'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np', 'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl', 'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sj', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'su', 'sv', 'sx', 'sy', 'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tl', 'tm', 'tn', 'to', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'uk', 'us', 'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wf', 'ws', 'ye', 'yt', 'za', 'zm', 'zw'];

const freeTLDs = ['tk', 'ml', 'ga', 'cf'];

const genericTLDs = ['com', 'info', 'net', 'org', 'biz', 'name', 'pro', 'aero', 'asia', 'cat', 'coop', 'edu', 'gov', 'int', 'jobs', 'mil', 'mobi', 'museum', 'tel', 'travel', 'arpa', 'xxx'];

const newTLDs = ['app', 'blog', 'club', 'cloud', 'dev', 'design', 'digital', 'email', 'expert', 'guru', 'io', 'life', 'link', 'live', 'media', 'ninja', 'one', 'online', 'site', 'space', 'store', 'tech', 'web', 'xyz','download','win','stream'];


class AdsenseScore {
  constructor(url, age, language, traffic, pages, niche) {
    this.url = url;
    this.age = age;
    this.language = language;
    this.traffic = traffic;
    this.pages = pages;
    this.niche = niche;
  }

  start() {

// Check for http protocol 
   if(this.url.includes('https://')){
       score += 2; 
    }else{
        score += 1;
    }
   
    // Check Age
    
    if(this.age <= 90){
        score += 1;
    }
    else if(this.age > 90 && this.age <= 180){
        score += 2;
    }
   else if(this.age > 180 && this.age <= 365){
        score += 3;
    }
    else if(this.age > 365){
        score += 4;
    }
    
    // Check Language
    switch(this.language.toLowerCase()){
        case 'english':
            score += 2;
            break;
        case 'other':
            score += 1;
            break;
    }
    
    // Check traffic
    if (this.traffic > 100000) {
        score += 3;
    }else if (this.traffic > 10000 && traffic < 100000){
        score += 2;
    } else if(this.traffic < 10000){
        score += 1;
    }
    
    // Check TLD
    let tld = this.url.split('.');
    
    for(let c of countryTLDs){
        if(c == tld[1]){
            score += 3;
            break;
        }
    }
    for(let g of genericTLDs){
        if(g == tld[1]){
            score += 4;
            break;
        }
    }
    
    for(let n of newTLDs){
        if(n == tld[1]){
            score += 2;
            
            break;
        }
    }
    
    for(let f of freeTLDs){
        if(f == tld[1]){
            score += 1;
            break;
        }
    }
    
    
    // Check for Pages
       
    switch(this.pages){
        case 1:
        score += 1;
        break;
        case 2:
        score += 2;
        break;
        case 3:
        score += 3;
        break;
        case 4:
        score += 4;
        break;
        case 0:
        score += 0;
        break;
    }
    
    
    // Check for niche
    
    switch(this.niche){
        case 3: //Specific Topic
        score += 3;
        break;
        case 2: // News and information
        score += 2;
        break;
        case 1: // Entertainment and Lifestyle 
        score += 1; 
        break;
    }
    
    
    return {score:score, percentage: (score/sample_space) * 100};
  }
}




module.exports = AdsenseScore;
