# Create your own end-to-end encryption algorithm #

`Symmetric encryption algorithm` — an algorithm that uses the same key for both encryption and decryption. A vivid and, at the same time, simple example is the Caesar cipher.

`Asymmetric encryption` - uses 2 keys - public and private (secret).
Public key for encryption, private key for decryption.

Algorithms allowing to use this technology:
+ Rivest—Shamir—Adleman (RSA) (most common)
+ Elliptic curve cryptosystem (ECC)
+ Diffie—Hellman (DH)
+ El Gamal

**_Pros_** (asymmetric algorithms): you can freely share the public key and anyone can send you a secret message.  
**_Cons_**: encryption/decryption speed.

**How everything works "under the hood":**

Consider the example of the RSA algorithm.

The first thing we need to do is generate a public and private key. The sequence of actions is something like this:

1) _We choose two prime numbers. I wish they were close enough:_

`p = 19` 
`s = 13`

2) _We calculate their product, as well as the Euler function:_

`n = p * s` & `f = (p — 1) * (s — 1)`

3) _Now the most time-consuming part is the choice of the exponent and an arbitrary coefficient._

The point is that, for the chosen coefficients, the value _«d»_ should be whole. _«d»_ — necessary component of the algorithm.

`e = 5` & `k = 9`  
`d = (k * f + 1)/e`

Now our public key (to encrypt the message) consists of the values of the variables: _«e»_ & _«n»_, and the private key (for decryption) from the values: _«d»_ & _«n»_.  

So in our case...  

The message is encrypted according to the formula: `crypt = m ^ e % n`.  
A decryption: `decrypt = crypt ^ d % n`.

From a programmer's point of view, we can use this information in the following way:

1. Create an array of matches for a character and its code (for example, ASCII code).
2. Apply the algorithm for each character, creating an array of converted values.
3. Convert the resulting array back to string form.
4. Profit!
