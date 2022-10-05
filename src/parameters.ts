export const parameters = {
    api: {
        endpoints: {
            'product.items': '/items',
            'product.item': '/items/[id]',
            'cart.get': '/cart',
            'cart.delete': '/cart',
            'cart.item.delete': '/cart/[itemId]',
            'cart.item.add': '/cart',
            'cart.item.update': '/cart/[itemId]',
        },
    },
    pages: {
        product: '/product/[id]',
        products: '/',
        cart: '/cart',
    },
};
