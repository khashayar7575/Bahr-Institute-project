export const SendEmailApi = async (
  emails: string,
  mssageObject: { subject: string; text: string; html: string }
) => {
  try {
    window.alert(`${emails} - ${JSON.stringify(mssageObject)}`);
    // const dataObj = {
    //   to: emails,
    //   subject: mssageObject.subject,
    //   text: mssageObject.text,
    //   html: mssageObject.html,
    // };
    // const result = await fetch("/sendEmail", {
    //   method: "post",
    //   body: JSON.stringify(dataObj),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // console.log(result);
    // const body = await result.json();
    // return body;
  } catch (error) {
    return false;
  }
};
