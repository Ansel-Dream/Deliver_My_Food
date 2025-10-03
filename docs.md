# Food Panda-like Food Delivery API Documentation (Pakistan-specific)

## Base URLs

- **Local Development:** `http://localhost:5153`
- **Production/API:** `https://jrt/api/foodcart.com`

---

## Notes

- **Authentication:**
  - Public endpoints: No authentication required (`GET /restaurants`, `GET /contact`)
  - Restricted endpoints: Token-based authentication required (`POST /orders`, `POST /users`, `POST /payments`, `POST /deliveries`)
- **Content-Type:** `application/json` by default
- **CORS:** Enabled for all origins
- **Pagination & Filtering:** Optional query parameters supported on some GET endpoints, e.g., `GET /orders?status=pending&limit=10&page=2`

---

## Resources & Endpoints

### Contact

**GET /contact**  
Fetch all contact form submissions.

- **Responses:**
  - 200 OK: Returns array of contact submissions
  - 500 Internal Server Error: Error fetching contacts

**Example Response:**

```json
[
  {
    "id": "1",
    "name": "Ahmed Khan",
    "email": "ahmed.khan@example.com",
    "phone": "03001234567",
    "subject": "Feedback",
    "message": "Excellent service in Lahore!"
  }
]
```

**POST /contact**  
Submit a new contact form entry.

- **Request Body:**

```json
{
  "name": "Sara Ali",
  "email": "sara.ali@example.com",
  "phone": "03111223344",
  "subject": "Inquiry",
  "message": "Do you deliver to Karachi suburbs?"
}
```

- **Responses:**
  - 200 OK: `{ "message": "Your data has been created successfully" }`
  - 500 Internal Server Error: `{ "message": "Error creating data" }`

---

### Orders

**GET /orders**  
Fetch all orders, optionally filtered by status or user.

- **Query Parameters (Optional):**

  - `status` (string): Filter orders by status (e.g., pending, completed)
  - `userId` (string): Filter orders by user ID
  - `limit` (number): Number of records per page
  - `page` (number): Page number for pagination

- **Response Example:**

```json
[
  {
    "id": "101",
    "userId": "u1",
    "restaurantId": "r1",
    "items": [
      { "name": "Chicken Biryani", "quantity": 2, "price": 450 },
      { "name": "Soft Drink", "quantity": 2, "price": 100 }
    ],
    "total": 1100,
    "deliveryAddress": "Gulistan Colony, Burewala",
    "paymentMethod": "Cash",
    "status": "Pending"
  }
]
```

**POST /orders**  
Create a new order.

- **Request Body:**

```json
{
  "userId": "u2",
  "restaurantId": "r3",
  "items": [
    { "name": "Beef Burger", "quantity": 1, "price": 350 },
    { "name": "Fries", "quantity": 1, "price": 150 }
  ],
  "total": 500,
  "deliveryAddress": "DHA Phase 5, Rawalpindi",
  "paymentMethod": "Card"
}
```

- **Responses:**
  - 201 Created: Returns created order document
  - 400 Bad Request: Error creating order

**GET /orders/{id}**  
Fetch a single order by ID.

- **Responses:**
  - 200 OK: Order document
  - 404 Not Found: Order not found

**PUT /orders/{id}**  
Update order details.

- **Request Body:** Partial or full order object
- **Responses:**
  - 200 OK: Returns updated order
  - 400 Bad Request: Error updating order

**DELETE /orders/{id}**  
Delete an order.

- **Responses:**
  - 200 OK: `{ "message": "Deleted successfully" }`
  - 500 Internal Server Error: `{ "message": "Error deleting order" }`

---

### Restaurants

**GET /restaurants**  
Fetch all restaurants.

- **Response Example:**

```json
[
  {
    "id": "r1",
    "name": "Karachi Pizza House",
    "address": "Clifton, Karachi",
    "phone": "03009876543",
    "cuisine": ["Italian", "Fast Food"],
    "rating": 4.7
  }
]
```

**POST /restaurants**  
Add a new restaurant.

- **Request Body:**

```json
{
  "name": "Lahore Biryani Center",
  "address": "Model Town, Lahore",
  "phone": "03001234567",
  "cuisine": ["Pakistani", "Fast Food"],
  "rating": 4.5
}
```

---

### Users

**GET /users**  
Fetch all users.

**POST /users**  
Create a new user.

- **Request Body:**

```json
{
  "name": "Bilal Ahmad",
  "email": "bilal.ahmad@example.com",
  "phone": "03123456789",
  "password": "securepassword"
}
```

- **Response Example:**

```json
{
  "id": "u3",
  "name": "Bilal Ahmad",
  "email": "bilal.ahmad@example.com",
  "phone": "03123456789"
}
```

---

### Deliveries

**GET /deliveries**  
Fetch all delivery assignments.

**POST /deliveries**  
Assign a delivery.

- **Request Body:**

```json
{
  "orderId": "101",
  "deliveryPersonId": "d1",
  "status": "Pending"
}
```

- **Response Example:**

```json
{
  "id": "del1",
  "orderId": "101",
  "deliveryPersonId": "d1",
  "status": "Pending"
}
```

---

### Payments

**POST /payments**  
Record a payment for an order.

- **Request Body:**

```json
{
  "orderId": "101",
  "amount": 1100,
  "method": "Cash",
  "status": "Completed"
}
```

- **Response Example:**

```json
{
  "id": "pay1",
  "orderId": "101",
  "amount": 1100,
  "method": "Cash",
  "status": "Completed"
}
```

---

## Example cURL Commands

```bash
# Create contact
curl -X POST http://localhost:5153/contact \
-H 'Content-Type: application/json' \
-d '{"name":"Sara Ali","email":"sara.ali@example.com","phone":"03111223344","subject":"Inquiry","message":"Do you deliver to Karachi suburbs?"}'

# List orders
curl http://localhost:5153/orders

# Create order
curl -X POST http://localhost:5153/orders \
-H 'Content-Type: application/json' \
-d '{"userId":"u2","restaurantId":"r3","items":[{"name":"Beef Burger","quantity":1,"price":350},{"name":"Fries","quantity":1,"price":150}],"total":500,"deliveryAddress":"DHA Phase 5, Karachi","paymentMethod":"Card"}'

# Create restaurant
curl -X POST http://localhost:5153/restaurants \
-H 'Content-Type: application/json' \
-d '{"name":"Lahore Biryani Center","address":"Model Town, Lahore","phone":"03001234567","cuisine":["Pakistani","Fast Food"],"rating":4.5}'

# Create user
curl -X POST http://localhost:5153/users \
-H 'Content-Type: application/json' \
-d '{"name":"Bilal Ahmad","email":"bilal.ahmad@example.com","phone":"03123456789","password":"securepassword"}'

# Assign delivery
curl -X POST http://localhost:5153/deliveries \
-H 'Content-Type: application/json' \
-d '{"orderId":"101","deliveryPersonId":"d1","status":"Pending"}'

# Record payment
curl -X POST http://localhost:5153/payments \
-H 'Content-Type: application/json' \
-d '{"orderId":"101","amount":1100,"method":"Cash","status":"Completed"}'
```

---

## Error Handling

All errors are returned in a standard JSON format:

```json
{
  "message": "Error description"
}
```

**Example Error Responses:**

- 400 Bad Request:

```json
{ "message": "Invalid request body" }
```

- 404 Not Found:

```json
{ "message": "Resource not found" }
```

- 500 Internal Server Error:

```json
{ "message": "Server error, please try again later" }
```

---
