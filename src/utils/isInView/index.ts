export function isDivInView(divId:string) {
    const div = document.querySelector(divId);
    const rect = div?.getBoundingClientRect();
  

    if(!rect) return null;
    const isInView = (
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)-20 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)+20)
    );
  
    return isInView;
}