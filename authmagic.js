module.exports = {
  "core": {
    "name": "authmagic-timerange-stateless-core",
    "source": "../authmagic-timerange-stateless-core"
  },
  "plugins": {
    "authmagic-email-plugin": {
      "name": "authmagic-email-plugin",
      "source": "../authmagic-email-plugin"
    }
  },
  "params": {
    "authmagic-email-plugin": {
      "isTest": true,
      "mailer": {
        "auth": {
          "user": "",
          "pass": ""
        },
        "host": "smtp.ethereal.email",
        "port": 587,
        "secure": false
      },
      "from": "AuthMailer",
      "subject": "Your Magic Link"
    },
    "authmagic-timerange-stateless-core": {
      "duration": 300,
      "key": "310531d085be5e9c",
      "sendKeyPlugin": "authmagic-email-plugin",
      "expiresIn": "20m",
      "refreshExpiresIn": "2d",
      "securityKeyRule": {
        length: 6,
        charset: "numeric",
      },
      // for debugging and app validations
      // username: securityCode
      fixedSecurityCodes: {
        "oleksandrknyga@gmail.com": "123456"
      },
    }
  },
  "port": 3000,
  "theme": {
    "name": "authmagic-link-email-phone-bootstrap-theme",
  }
};
