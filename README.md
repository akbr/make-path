# makePath :wavy_dash:

**Defines and enforces an array-based "path" convention.**

A path is an array intended to be interpreted as a list of keys. Useful for nesting into javascript objects.

## API
### makePath(input) => path
Valid `input`:
* a string (dot notation allowed);
* a number;
* an array (simply be returned). 

## Usage
```javascript
makePath("id"); // ["id"]
makePath("users.0.name"); // ["users", "0", "name"]
makePath(1); // [1]
makePath(["foo", "bar"]); // ["foo", "bar"]
makePath({foo:"bar"}); // throws
```