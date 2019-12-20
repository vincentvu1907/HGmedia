export default {
    image(name, path) {
        return process.env.baseURL + "/" + path + "/" + name
    },
    alt(title) {
        title = title.trim().toLowerCase();
        return this.changeAlias(title)
    },
    changeAlias(str) {
        str = str.replace(/Ã |Ã¡|áº¡|áº£|Ã£|Ã¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g, "a");
        str = str.replace(/Ã¨|Ã©|áº¹|áº»|áº½|Ãª|á»|áº¿|á»‡|á»ƒ|á»…/g, "e");
        str = str.replace(/Ã¬|Ã­|á»‹|á»‰|Ä©/g, "i");
        str = str.replace(/Ã²|Ã³|á»|á»|Ãµ|Ã´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›|á»£|á»Ÿ|á»¡/g, "o");
        str = str.replace(/Ã¹|Ãº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g, "u");
        str = str.replace(/á»³|Ã½|á»µ|á»·|á»¹/g, "y");
        str = str.replace(/Ä‘/g, "d");
        str = str.replace(/Ã€|Ã|áº |áº¢|Ãƒ|Ã‚|áº¦|áº¤|áº¬|áº¨|áºª|Ä‚|áº°|áº®|áº¶|áº²|áº´/g, "A");
        str = str.replace(/Ãˆ|Ã‰|áº¸|áºº|áº¼|ÃŠ|á»€|áº¾|á»†|á»‚|á»„/g, "E");
        str = str.replace(/ÃŒ|Ã|á»Š|á»ˆ|Ä¨/g, "I");
        str = str.replace(/Ã’|Ã“|á»Œ|á»Ž|Ã•|Ã”|á»’|á»|á»˜|á»”|á»–|Æ |á»œ|á»š|á»¢|á»ž|á» /g, "O");
        str = str.replace(/Ã™|Ãš|á»¤|á»¦|Å¨|Æ¯|á»ª|á»¨|á»°|á»¬|á»®/g, "U");
        str = str.replace(/á»²|Ã|á»´|á»¶|á»¸/g, "Y");
        str = str.replace(/Ä/g, "D");
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
        str = str.replace(/\u02C6|\u0306|\u031B/g, "")
        return str;
    }
}