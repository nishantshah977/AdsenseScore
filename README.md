# AdsenseScore
NPM Package that provide probability of getting approved in Adscence 

# Example

``` 
const AdsenseScore = require('AdsenseScore');
const mySite = new AdsenseScore('https://www.example.com', 300, 'English', 150000, 4, 3);
console.log(mySite.start()); 
```

# Prototypes

1. **Top Level Domain** with http/https
2. **Age of Domain** ( in days )
3. **Language** (English, Other)
4. **Traffic** of website
5. **Pages** ( About, Contact, Privacy, Terms )
 * If website has only 2 page suppose, about and contact them prototype 2. If it has all 4 pages prototype 4 and if it doesn't have any prototype 0.
6. Niche 
 * 1 for Specific Topic like Blockchain, AI
 * 2 for news and information niche
 * 3 for Entertainment and lifestyle niche

**For Reference See Example**
