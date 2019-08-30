export function setScalingOfHtmlElementOnHeightOfHisParent(htmlElementToScaling: HTMLElement) {

  const parentHtmlElementOfElementToScaling = htmlElementToScaling.parentElement

  if(parentHtmlElementOfElementToScaling) {
    htmlElementToScaling.style.transform          = "none"
    htmlElementToScaling.style.webkitTransform    = "none"

    const heightOfParentHtmlElement = parentHtmlElementOfElementToScaling.getBoundingClientRect().height
    const heightOfHtmlElementToScaling = htmlElementToScaling.getBoundingClientRect().height

    console.log("parent height",    heightOfParentHtmlElement)
    console.log("child height",     heightOfHtmlElementToScaling)

    if(heightOfHtmlElementToScaling > heightOfParentHtmlElement) {

      const transformPropertyValue = `scale(${heightOfParentHtmlElement / heightOfHtmlElementToScaling})`

      htmlElementToScaling.style.transform          = transformPropertyValue
      htmlElementToScaling.style.webkitTransform    = transformPropertyValue
    }

  }
}
