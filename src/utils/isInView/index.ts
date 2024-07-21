export function isDivInView(divId:string) {
    const div = document.querySelector(divId);
    const rect = div?.getBoundingClientRect();
  

    if(!rect) return null;
    const isInView = (
      rect.top >= 0 &&
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)-10 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)+10)
    );
  
    return isInView;
}