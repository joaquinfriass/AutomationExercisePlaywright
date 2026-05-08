
# Test Cases - Automation Exercise

  **Test Case 1: Register User**

- 1. Navigate to url ”https://automationexercise.com/login”
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

Casos de prueba Tienda y Carrito:
Caso de prueba 5: Verificar todos los productos y la página de detalles del producto.
Caso de prueba 6: Búsqueda de productos
Caso de prueba 7: Agregar productos al carrito Y Verificar la cantidad de productos en el carrito
Caso de prueba 8: Eliminar productos del carrito

Casos de prueba API + UI
Test Case 9: Register User con API, Validar Información en UI.
Test Case 10: Registrar Usuario con la UI, y validar información del Usuario con JSON.
Test Case 11: Editar Password con API, Validar información e iniciar Sesión.
Test Case 12: Eliminar Usuario con API, intentar iniciar sesión con credenciales inválidas y luego ingresar correctamente.
