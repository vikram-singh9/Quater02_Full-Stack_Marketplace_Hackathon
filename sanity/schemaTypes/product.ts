export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
      {
        name:'slug',
        type:'slug',
        title:'Slug',
        options:{
          source:'name',
          maxLength:96
        }
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Product Price',
      },
     
      {
        name: 'ratingCount',
        type: 'number',
        title: 'Rating Count',
        description: 'Number of ratings'
      },
     
     
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true // Enables cropping and focal point selection
        }
      }
    ]
  };