import JsonApiParserService from './JsonApiParserService';

class CatalogService {

    static addIndex (products) {
        let i = products.length;
        while(i--) {
            products[i].order = i;
        }
        return products;
    }

    static getTopProducts(campaignPK) {
        return new Promise((resolve, reject) => {
            new Ajax.Request('/front/get/img/json_mockTopProductsDataEmpty.json', {
                onSuccess: function(response) {
                    let toJsonRemoveOnProduction = JSON.parse(response.responseText);
                    let parsedResponse = JsonApiParserService.parse(toJsonRemoveOnProduction).data;
                    parsedResponse = CatalogService.addIndex(parsedResponse);
                    resolve(parsedResponse);
                },
                onFailure: function(error){
                    reject (error);
                }
            });
         });
    }
}

export default CatalogService;
