function ohey (
  endpoint,
  { 
    method = "GET",
    baseUrl = "",
    timeout = 0,
    body,
    headers = { "Content-Type": "application/json"}
  } = {}
) {
  const url = `${baseUrl}${endpoint}`;
  
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    
    if (timeout > 0) {
      setTimeout(() => {
        xhr.abort();
        reject(new Error("Request timed out"));
      }, timeout);
    }
    
    xhr.open(method, url, true);
    
    for (const [key, value] of Object.entries(headers)) {
      xhr.setRequestHeader(key, value);
    }
    
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        let responseType = "Text";
        
        try {
          responseType = "JSON";
          resolve({ data: JSON.parse(xhr.responseText), responseType, responseCode: xhr.status, method });
        } catch (error) {
          resolve({ data: xhr.responseText, responseType, responseCode: xhr.status, method });
        }
      } else {
        reject(new Error(`Request failed with status: ${xhr.status}`));
      }
    };
    
    xhr.onerror = () => {
      reject(new Error("Network error"));
    };
    
    xhr.send(body);
  });
};

module.exports = ohey;