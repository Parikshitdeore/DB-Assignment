# Assessment answers

## 1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram
### Ans : Product is the main object model on which the other object models are depended. Product has a unique id. Product also has category_id, inventory_id and discount_id which are the reference to their respective models i.e product_category product_inventory, discount.

## 2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
### Ans : I will make use of validation to check if product has a valid category that is present in the database or not. This can be achieved by putting in a validation code for category_id whenever any new data of product is to be updated to the database.
