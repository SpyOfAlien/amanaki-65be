module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: "amanakiemail@gmail.com",
        from: "amanakiemail@gmail.com",
        subject: `Customer Feedback - ${result.email} - ${result.phone}`,
        text: result.message,
      });
    } catch (error) {
      console.error(error);
    }
  },
};
