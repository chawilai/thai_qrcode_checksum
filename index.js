const crc = require('crc');

// Your data as a Buffer or string
    // 00020101021229370016A000000677010111011300668502987665802TH5303764540550.016304 F39E
    // 00020101021229370016A000000677010111011300668502987665802TH5303764540550.006304 59CF
    // 00020101021229370016A000000677010111011300668502987665802TH5303764540599.996304 5548

    // Calculate CRC-16 checksum for a string
    const input = "00020101021229370016A000000677010111011300668502987665802TH5303764540599.996304";
    const crcOptions = {
        polynomial: 0x1021, // Polynomial for CRC-16 (0x1021)
        initialValue: 0xFFFF, // Initial value for CRC-16 (0xFFFF)
      };
      
    // Calculate CRC-16 checksum for a string with custom options
    const crc16 = crc.crc16xmodem(input, 0xFFFF);
    
    console.log(`CRC-16 of "${input}": ${crc16.toString(16).toUpperCase()}`);