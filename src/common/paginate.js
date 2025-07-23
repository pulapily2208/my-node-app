const {limit, delta} = require("../../config/default").pagination;
module.exports = (totalPages, page)=>{
    
    const listPages = [];
    const left = page - delta ;
    const right = page + delta ;
    for (let i = 1; i <= totalPages; i++) {
        if(
            i === 1 ||
                i === totalPages ||
                i === page ||
                (i >= left && i <= right)
        ) {
            listPages.push(i);
        }
    }
    return listPages;


}