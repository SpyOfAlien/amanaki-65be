module.exports = ({ env }) => {
  return {
    ckeditor: {
      enabled: true,
      config: {
        editor: {
          toolbar: {
            items: [
              "heading",
              "|",
              "alignment",
              "|",
              "bold",
              "italic",
              "strikethrough",
              "underline",
              "subscript",
              "superscript",
              "|",
              "link",
              "|",
              "bulletedList",
              "numberedList",
              "todoList",
              "fontfamily",
              "fontsize",
              "fontColor",
              "fontBackgroundColor",
              "|",
              "code",
              "codeBlock",
              "|",
              "insertTable",
              "|",
              "outdent",
              "indent",
              "|",
              "uploadImage",
              "blockQuote",
              "|",
              ,
              "undo",
              "redo",
            ],
            shouldNotGroupWhenFull: true,
          },
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
