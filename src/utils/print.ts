export default function tapPrint(body: string) {
  let head = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body>'
  let foot = '</body></html>'
  let printStr = head + body + foot                                    
  let pwin = window.open('Print.htm','print') 
  if (!pwin) return
  pwin.document.write(printStr)
  pwin.document.close()
  pwin.print()
}