export const SendSmsApi = async (
  number: string,
  messageId: number,
  agumans: string[]
) => {
  try {
    window.alert(`${number} - ${messageId} - ${JSON.stringify(agumans)}`);

    // const dataObj = {
    //   bodyId: messageId,
    //   to: number,
    //   args: agumans,
    // };
    // const result = await fetch("/sendMessage", {
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
