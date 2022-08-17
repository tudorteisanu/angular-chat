export const scrollToBottom= (nodeId="",timeout=400): void => {
  let scrollElement: any;

  if (nodeId) {
    scrollElement = document.getElementById(nodeId)!;
  } else {
    scrollElement = document.body;
  }

  setTimeout(()=> {
    scrollElement.scroll({top: scrollElement.scrollHeight, behavior: "smooth"});
  }, timeout)
}
