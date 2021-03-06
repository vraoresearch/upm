/*
 * Author: Jon Trulson <jtrulson@ics.com>
 * Copyright (c) 2015 Intel Corporation.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var sainsmartObj = require('jsupm_i2clcd');

// Instantiate a Sainsmart LCD Keypad Shield using default pins
var lcd = new sainsmartObj.SAINSMARTKS();

lcd.setCursor(0,0);
lcd.write("Sainsmart KS");
lcd.setCursor(1,2);
lcd.write("Hello World");

// output current key value every second.
setInterval(function()
{
    console.log("Button value: " + lcd.getRawKeyValue());
}, 1000);

// exit on ^C
process.on('SIGINT', function()
{
    lcd = null;
    sainsmartObj.cleanUp();
    sainsmartObj = null;
    console.log("Exiting.");
    process.exit(0);
});

