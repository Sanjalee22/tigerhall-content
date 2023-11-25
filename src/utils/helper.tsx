export const debounce = (func: (...args: any[]) => void, delay: number): (...args: any[]) => void => {
    let timer: number | null;
  
    return (...args: any[]): void => {
      if (timer) clearTimeout(timer);
      timer = window.setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

export const editImageUri = (uri: string): string => {
  let separatedString = uri.split("/");
  separatedString[2] = separatedString[2] + "/resize/316x118";
  return separatedString.join("/");
};
