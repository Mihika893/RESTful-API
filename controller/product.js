const product = require("../model/product")

const getAllProduct = async(req, res)=>{
    const {company, name, featured, sort, select} = req.query;
    const queryObject = {};
    if(company){
        queryObject.company = company;
    }
    if( featured ){
        queryObject.featured = featured;
    }

    if(name){
        queryObject.name = { $regex : name, $options: "i"};
    }


    let apidata = product.find(queryObject);

    if(sort){
        let sortfix = sort.replace("," , " ");
        apidata.sort(sortfix)
    }
    if(select){
        let selectfix = select.split(",").join(" ");
        apidata.select(selectfix)
    }
    let page = Number(req.query.page) || 1;     //number of pages
    let limit = Number(req.query.limit) || 11;  //number of items in each page

   let skip = (page-1) * limit;                //ex: 2-1 * 11 = 11 = skip  first 11 elements, in this case won't show you anything
   apidata = apidata.skip(skip).limit(limit);  //kinda useless

    const Products = await apidata;        
    res.status(200).json({Products, nbHits: Products.length});
};

// const getAllProductTesting = async(req, res)=>{
//     const Products = await product.find(req.query).select("name", "company");
//     res.status(200).json({Products})
// };

module.exports = {getAllProduct};
