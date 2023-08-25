const types = ['Stock Order', 'Backorder', 'Mixed Order'];
const countries = ['US', 'UK', 'UA', 'RO'];
const statuses = ['Abandoned Checkout', 'Awaiting Payment', 'Partially Refunded', 'Completed', 'Partially Shipped', 'Processing', 'Payment Received', 'Payment Declined', 'Awaiting Fulfillment'];

const mockOrders = [
    { id: 0, orderId: '#1V9VGU48XV', type: 'Stock Order', date: '21 September 2023, 10:25', customer: 'Madalina Popescu', country: 'US', status: 'Abandoned Checkout', value: 138000.77 },
    { id: 1, orderId: '#1V9VGU48XV', type: 'Stock Order', date: '21 September 2023, 10:25', customer: 'Madalina Popescu', country: 'UK', status: 'Awaiting Payment', value: 138000.77 },
    { id: 2, orderId: '#1V9VGU48XV', type: 'Stock Order', date: '21 September 2023, 10:25', customer: 'Madalina Popescu', country: 'UA', status: 'Partially Refunded', value: 138000.77 },
    { id: 3, orderId: '#1V9VGU48XV', type: 'Stock Order', date: '21 September 2023, 10:25', customer: 'Madalina Popescu', country: 'US', status: 'Completed', value: 138000.77 },
    { id: 4, orderId: '#1V9VGU48XV', type: 'Backorder', date: '21 September 2023, 10:25', customer: 'Madalina Popescu', country: 'RO', status: 'Completed', value: 138000.77 },
    { id: 5, orderId: '#1V9VGU48XV', type: 'Backorder', date: '21 September 2023, 10:25', customer: 'Madalina Popescu', country: 'UA', status: 'Partially Shipped', value: 122.32 },
    { id: 6, orderId: '#1V9VGU48XV', type: 'Mixed Order', date: '21 September 2023, 10:25', customer: 'Madalina Popescu', country: 'UK', status: 'Processing', value: 233.91 },
    { id: 7, orderId: '#1V9VGU48XV', type: 'Stock Order', date: '21 September 2023, 10:25', customer: 'Madalina Popescu', country: 'RO', status: 'Payment Received', value: 2920.77 },
    { id: 8, orderId: '#1V9VGU48XV', type: 'Backorder', date: '21 September 2023, 10:25', customer: 'Madalina Popescu', country: 'UA', status: 'Payment Declined', value: 138000.77 },
    { id: 7, orderId: '#1V9VGU48XV', type: 'Stock Order', date: '21 September 2023, 10:25', customer: 'Madalina Popescu', country: 'UK', status: 'Awaiting Fulfillment', value: 2920.77 },
]

for (let i = 9; i < 287; i++) {
    const randomType = types[Math.floor(Math.random() * types.length)];
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const randomValue = (Math.random() * 138000).toFixed(2);

    mockOrders.push({
        id: i,
        orderId: `#1V9VGU48XV`,
        type: randomType,
        date: '21 September 2023, 10:25',
        customer: 'Madalina Popescu',
        country: randomCountry,
        status: randomStatus,
        value: parseFloat(randomValue)
    });
}

export default mockOrders;