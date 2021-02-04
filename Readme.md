# Number System Converter

![Live Gif](https://github.com/Madhusudan707/number_system_react/blob/main/number_system/public/number_system_converter.gif)

It is a Simple App, Where you Can Convert One Number to System to Other.
Tech Stack used in this Apps are



## Getting Started

1. npm install
2. npm start

## Live Site

https://numbersystem.herokuapp.com/


## API End Points

1. Binary to All( i.e Binary to Decimal,Octal and HexaDecimal)
   
    Endpoints: https://numbersystem.herokuapp.com/B2ALL
    Ex:  https://numbersystem.herokuapp.com/B2ALL/1111
    Output : {"resultB2D":15,"resultB2O":17,"resultB2HD":"F"}

2. Decimal to All ( i.e Decimal to Binary,Octal and HexaDecimal)
   
    Endpoints: https://numbersystem.herokuapp.com/D2ALL
    Ex:  https://numbersystem.herokuapp.com/D2ALL/92
    Output : {"resultD2B":"1011100","resultD2O":"134","resultD2HD":"5C"}

3. Octal to All (i.e Octal to Binary,Decimal and HexaDecimal)
   
    Endpoints: https://numbersystem.herokuapp.com/O2ALL
    Ex:  https://numbersystem.herokuapp.com/O2ALL/25
    Output: {"resultO2B":"10101","resultO2D":21,"resultO2HD":"15"}

4. HexaDecimal to All (i.e HexaDecimal to Binary,Decimal and Octal)
   
    Endpoints: https://numbersystem.herokuapp.com/D2ALL
    Ex:  https://numbersystem.herokuapp.com/HD2ALL/1C2
    Output: {"resultHD2B":"111000010","resultHD2D":450,"resultHD2O":"702"}