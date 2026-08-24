using { orderapp.db } from '../db/schema';


service OrderService{
    entity OrderSet as projection on db.Orders;

}