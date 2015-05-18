Meteor.startup(function() {
    reCAPTCHA.config({
        theme: 'light',  // 'light' default or 'dark'
        publickey: '6LfoRQYTAAAAALfssl1Vi_sgP1AxihJlWjYMqxzj'
    });
});

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});