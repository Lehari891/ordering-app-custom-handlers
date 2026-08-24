namespace orderapp.db;

entity Orders {
    key ID      : UUID;
    orderDate   : Date;
    totalAmount : Decimal(9,2);      // For currency values
    status      : String enum {
        Pending;
        Processing;
        Shipped;
        Delivered;
        Cancelled;
    };                               // Order status
    createdAt   : Timestamp @cds.on.insert : $now;
    createdBy   : String @cds.on.insert : $user;
}