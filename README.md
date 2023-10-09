# thai_qrcode_checksum

using CRC-16 (XMODEM)
add initial value = 0xFFFF

the code will be 

const crc = require('crc');

const input = "00020101021229370016A000000677010111011300668502987665802TH5303764540599.996304";

const crc16 = crc.crc16xmodem(input, 0xFFFF);

console.log(`CRC-16 of "${input}": ${crc16.toString(16).toUpperCase()}`);
