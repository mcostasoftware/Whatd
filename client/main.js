Meteor.startup(function() {
    reCAPTCHA.config({
        theme: 'light',  // 'light' default or 'dark'
        publickey: '6LcSLQYTAAAAAB_Xp7Hqwu-X1hlOsYQTZRD0lqY3'
    });
});

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});