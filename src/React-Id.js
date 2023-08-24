// This function generates and returns a unique identifier in the form of a UUID (Universally Unique Identifier).
export function ReactId() {
  // UUID template with 'x' and 'y' as placeholders for hexadecimal characters
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    // Generate a random 4-bit value and bitwise OR with 0 to remove fractional part
    var r = Math.random() * 16 | 0;
    // If the placeholder is 'x', use the random value; if 'y', use (random & 0x3) | 0x8
    var v = c == 'x' ? r : (r & 0x3 | 0x8);
    // Convert the value to a hexadecimal string representation
    return v.toString(16);
  });
}
