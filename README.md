# DialpadWithHistory

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.


This is a dialpad with its history kind of application.

To run this application we need to follow these steps:

1. First of all pull the code in your local.
2. Go to the directory where there is a code fetched.
3. Open terminal
3. Install required dependencies by hitting command in the code directory in terminal: `npm install`
4. To run the application hit the command in terminal: `ng serve`
5. Open following url in browser to open the application: `http://localhost:4200/`


The Application Screen consits of two sides
1. In right side dialpad is there.
2. In left side keypad history is shown.

At the initialization of the app it shows the message that 'Keypad history does not exist. Please press any key from keypad to get history' because keypad history not exist.

When clicking on any key that time key entry is being reflected in session storage. It will show history in left side.
