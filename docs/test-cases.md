
# Test Cases - Automation Exercise

# Auth test

  **Test Case 1: Register User**

- 1. Navigate to login page
- 2. Verify 'New User Signup!' is visible
- 3. Enter name and email address
- 4. Click 'Signup' button
- 5. Verify that 'ENTER ACCOUNT INFORMATION' is visible
- 6. Fill details: Title, Name, Email, Password, Date of birth
- 7. Select checkbox 'Sign up for our newsletter!'
- 8. Select checkbox 'Receive special offers from our partners!'
- 9. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
- 10. Click 'Create Account button'
- 11. Verify that 'ACCOUNT CREATED!' is visible
- 12. Click 'Continue' button
- 13. Verify that 'Logged in as username' is visible
- 14. Delete account and verify deletion

**Test Case 2: Register User with existing email**

- 1. Navigate to login page
- 2. Verify 'New User Signup!' is visible
- 3. Enter name and already registered email address
- 4. Click 'Signup' button
- 5. Verify error 'Email Address already exist!' is visible

**Test Case 3: Login User with incorrect email and password**

- 1. Navigate to login page
- 2. Verify Login to your account is visible
- 3. Enter incorrect email address and password
- 4. Click 'login' button
- 5. Verify error 'Your email or password is incorrect!' is visible

**Test Case 4: Login User with correct email and password**

- 1. Navigate to login page
- 2. Verify 'Login to your account' is visible
- 3. Enter correct email address and password
- 4. Click 'login' button
- 5. Verify that 'Logged in as username' is visible

# Cart test

**Test Case 5: Verify All Products and product detail page**

 - 1. Navigate to Products page
 - 2. Verify all products title is visible
 - 3. Click on view product of first product
 - 4. Verify that detail is visible: product name, category, price, availability, condition, brand.

 **Test Case 6: Search Product**

 - 1. Navigate to Products page
 - 2. Enter product name in search input and click search button
 - 3. Verify searched products is visible
 - 4. Verify that the first result contains the searched word

**Test Case 6.1: Search Product with empty result**
 - 1. Navigate to Products page
 - 2. Enter non-existent product name in search input and click search button
 - 3. Verify that the search returns no results

 **Test Case 7: Add products in Cart and Verify quantity in Cart**

 - 1. Navigate to Products page
 - 2. Hover over first product and click 'Add to cart'
 - 3. Click 'Continue Shopping' button
 - 4. Hover over second product and click 'Add to cart'
 - 5. Click 'View Cart' button
 - 6. Verify both products are added to Cart
 - 7. Verify their prices, quantity and total price

 **Test Case 8: Remove products in Cart**

 - 1. Navigate to Products page
 - 2. Add products to cart
 - 3. Click View Cart Button
 - 4. Verify that cart page is displayed
 - 5. Click X button correspondint to particular product
 - 6. Verify thar product is removed from the cart

 # API + UI test

 **Test Case 9: Register API user, validate login and personal information**
Test Case 9: Register User con API, Validar Información en UI.

 **Test Case 10: Register UI user, validate API**
Test Case 10: Registrar Usuario con la UI, y validar información del Usuario con JSON.

 **Test Case 11: Edit Password with API, Validate Information and Log In**
Test Case 11: Editar Password con API, Validar información e iniciar Sesión.

 **Test Case 12: Create and delete users using API, log in with deleted user**
Test Case 12: Crear y Eliminar Usuario con API, iniciar sesión con usuario eliminado.








