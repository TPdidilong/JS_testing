function getUserOrders({ userIds, orderIds, userOrders, userData, orderData }) {
    return userOrders.map(userOrder => ({
        user: {
            id: userOrder.userId,
            name: userData[userOrder.userId],
        },
        orders: userOrder.orderIds.map(orderId => ({
            id: orderId,
            name: orderData[orderId].name,
            price: orderData[orderId].price,
        })),
    }));
}
