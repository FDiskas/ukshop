export const parameters = {
    api: {
        endpoints: {
            'product.items': '/api/items',
            'product.item': '/api/items/[id]',
            'cart.get': '/api/cart',
            'cart.delete': '/api/cart',
            'cart.item.delete': '/api/cart/[itemId]',
            'cart.item.add': '/api/cart',
            'cart.item.update': '/api/cart/[itemId]',
        },
    },
    pages: {
        product: '/product/[id]',
        products: '/',
        cart: '/cart',
    },
};
