module.exports = ({ env }) => {
  return {
    ckeditor: true,
    upload: {
      config: {
        provider: "strapi-provider-upload-do",
        providerOptions: {
          key: env("DO_SPACE_ACCESS_KEY"),
          secret: env("DO_SPACE_SECRET_KEY"),
          endpoint: env("DO_SPACE_ENDPOINT"),
          space: env("DO_SPACE_BUCKET"),
        },
      },
    },
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
