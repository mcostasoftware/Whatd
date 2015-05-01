Meteor.startup(function() {
    reCAPTCHA.config({
        theme: 'light',  // 'light' default or 'dark'
        publickey: '6LcSLQYTAAAAAB_Xp7Hqwu-X1hlOsYQTZRD0lqY3'
    });
});