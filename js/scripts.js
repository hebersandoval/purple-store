/*!
 * LivePerson
 */
let pageTitle = document.getElementById('page-title').innerHTML;
let sku = document.getElementById('sku').innerHTML;

lpTag.sdes = lpTag.sdes || [];
lpTag.sdes.push([
    {
        type: 'cart', // Mandatory
        total: 680.0, // Total value of the cart after discount
        currency: 'USD', // Currency code
        numItems: 2, // Number of items in cart
        products: [
            {
                product: {
                    name: 'Purple Chair', // Product name
                    category: 'Furniture', // Product Category Name
                    sku: sku, // Product SKU or unique identifier
                    price: 340.0, // Single product price
                },
                quantity: 42, // Number of products
            },
        ],
    },
    {
        type: 'ctmrinfo', //MANDATORY
        info: {
            currency: 'USD', //CURRENCY CODE
            socialId: pageTitle, //SOCIAL ID OF YOUR CHOICE: FACEBOOK, TWITTER ETC...
            userName: 'Sofa Guy 2000', //CONSUMER NICKNAME OR USERNAME
            storeNumber: '123865', //STORE NUMBER
            storeZipCode: '20505', //STORE ZIP CODE
        },
    },
]);
