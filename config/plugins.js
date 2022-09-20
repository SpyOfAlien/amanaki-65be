module.exports = ({ env }) => {
  return {
    ckeditor: true,
    email: {
      config: {
        provider: "sendgrid",
        providerOptions: {
          apiKey: env("SENDGRID_API_KEY"),
        },
        settings: {
          defaultFrom: "spyofalien@gmail.com",
          defaultReplyTo: "spyofalien@gmail.com",
        },
      },
    },
    "users-permissions": {
      config: {
        jwt: {
          expiresIn: "7d",
        },
        jwtSecret: env("JWT_SECRET"),
      },
    },
  };
};
